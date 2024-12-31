import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import DefaultLayout from './layout/DefaultLayout';

import ECommerce from './pages/Dashboard/ECommerce';
import Video from './pages/HomePage/Video';
import WhyChooseUs from './pages/HomePage/WhyChooseUs';
import KeyFeature from './pages/HomePage/KeyFeature';
import Client from './pages/HomePage/Client';
import Testimonial from './pages/HomePage/Testimonial';
import Profile from './pages/Profile';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Tables from './pages/Tables';
import Settings from './pages/Settings';
import Chart from './pages/Chart';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import ProtectedRoute from './containers/ProtectedRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Signin | MW-Admin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | MW-Admin" />
              <SignUp />
            </>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <DefaultLayout>
                <Routes>
                  <Route
                    path="/dashboard"
                    element={
                      <>
                        <PageTitle title="Dashboard | MW-Admin" />
                        <ECommerce />
                      </>
                    }
                  />
                  <Route
                    path="/home-page/video"
                    element={
                      <>
                        <PageTitle title="Video | MW-Admin" />
                        <Video />
                      </>
                    }
                  />
                  <Route
                    path="/home-page/why-choose-us"
                    element={
                      <>
                        <PageTitle title="Why Choose Us | MW-Admin" />
                        <WhyChooseUs />
                      </>
                    }
                  />
                  <Route
                    path="/home-page/key-feature"
                    element={
                      <>
                        <PageTitle title="Key Feature | MW-Admin" />
                        <KeyFeature />
                      </>
                    }
                  />
                  <Route
                    path="/home-page/client"
                    element={
                      <>
                        <PageTitle title="Client | MW-Admin" />
                        <Client />
                      </>
                    }
                  />
                  <Route
                    path="/home-page/testimonial"
                    element={
                      <>
                        <PageTitle title="Testimonial | MW-Admin" />
                        <Testimonial />
                      </>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <>
                        <PageTitle title="Profile | MW-Admin" />
                        <Profile />
                      </>
                    }
                  />
                  <Route
                    path="/forms/form-elements"
                    element={
                      <>
                        <PageTitle title="Form Elements | MW-Admin" />
                        <FormElements />
                      </>
                    }
                  />
                  <Route
                    path="/forms/form-layout"
                    element={
                      <>
                        <PageTitle title="Form Layout | MW-Admin" />
                        <FormLayout />
                      </>
                    }
                  />
                  <Route
                    path="/tables"
                    element={
                      <>
                        <PageTitle title="Tables | MW-Admin" />
                        <Tables />
                      </>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <>
                        <PageTitle title="Settings | MW-Admin" />
                        <Settings />
                      </>
                    }
                  />
                  <Route
                    path="/chart"
                    element={
                      <>
                        <PageTitle title="Basic Chart | MW-Admin" />
                        <Chart />
                      </>
                    }
                  />
                  <Route
                    path="/ui/alerts"
                    element={
                      <>
                        <PageTitle title="Alerts | MW-Admin" />
                        <Alerts />
                      </>
                    }
                  />
                  <Route
                    path="/ui/buttons"
                    element={
                      <>
                        <PageTitle title="Buttons | MW-Admin" />
                        <Buttons />
                      </>
                    }
                  />
                </Routes>
              </DefaultLayout>
            </ProtectedRoute>
          }
        />

        {/* Fallback to Signin */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
