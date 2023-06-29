import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import LoadingSpiner from "./LoadingSpiner/LoadingSpiner";
import Layout from "./Layout/Layout";
import { fetchCurrentUser } from "redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";


const HomePage = lazy(() => import('../pages/Home'))
const ContactsPage = lazy(() => import('../pages/Contacts'))
const RegisterPage = lazy(() => import('../pages/Register'))
const LoginPage = lazy(() => import('../pages/Login'))


const AppH = () => {
  const dispatch = useDispatch()


    useEffect(() => {
    dispatch(fetchCurrentUser())
  },[dispatch])

  return (
<Suspense fallback={<LoadingSpiner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />

              <Route
                path="/register"
                element={
                 <RegisterPage />
                }
              />

              <Route
                path="/login"
                element={<LoginPage/>}
              />

          <Route path="/contacts" element={<ContactsPage/>} />
            </Route>
          </Routes>
        </Suspense>
  )
}

export default AppH