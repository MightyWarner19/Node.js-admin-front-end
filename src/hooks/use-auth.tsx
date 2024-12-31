import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Auth } from '../api';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

const useAuth = () => {
  const [user, setUser] = useState<string | null>(
    localStorage.getItem('at-token'),
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const onAuthChange = async (auth: string | null) => {
    if (!auth) {
      setUser(null);
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    setUser(auth);
    localStorage.setItem('at-token', auth);
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await Auth.login(email, password);
      if (res.data.access_token) {
        localStorage.setItem('at-token', res.data.access_token);
        setUser(res.data.access_token);
        setIsLoading(false);
        toast.success('Successfully logged in');
        navigate('/dashboard');
        queryClient.invalidateQueries();
      } else {
        toast.error('Error while logging in');
      }
    } catch (error) {
      toast.error(`Error while logging in! Provide valid credentials`);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const res = await Auth.logout();
      console.log(res);
      if (res.status === 200) {
        localStorage.removeItem('at-token');
        setUser(null);
        setIsLoading(false);
        navigate('/');
        queryClient.invalidateQueries();
        toast.success('Logout successful');
      }
    } catch (error) {
      toast.error('Error while logging out');
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem('at-token');
    onAuthChange(auth);
  }, []);

  return { login, isLoading, user, logout };
};
export default useAuth;
