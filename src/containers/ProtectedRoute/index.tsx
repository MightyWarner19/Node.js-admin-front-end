import { Navigate } from 'react-router-dom';
import Loader from '../../common/Loader';

import { IContainer } from '../types';
import useAuth from '../../hooks/use-auth';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }: IContainer) => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    toast.error('Please login first!');
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
