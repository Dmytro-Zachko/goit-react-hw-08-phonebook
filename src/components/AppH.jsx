import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import LoadingSpiner from "./LoadingSpiner/LoadingSpiner";
import Layout from "./Layout/Layout";
import { fetchCurrentUser } from "redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { getRefreshUser } from "redux/auth/auth-selectors";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const HomePage = lazy(() => import('../pages/Home'))
const ContactsPage = lazy(() => import('../pages/Contacts'))
const RegisterPage = lazy(() => import('../pages/Register'))
const LoginPage = lazy(() => import('../pages/Login'))


const AppH = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(getRefreshUser)


    useEffect(() => {
    dispatch(fetchCurrentUser())
  },[dispatch])

  return (
    <>
      {isRefreshing ? (<p>Refreshing User...</p>) : (
        <Suspense fallback={<LoadingSpiner/>}>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<HomePage />} />
              <Route path="/register" element={
                <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />} />
              <Route path="/login" element={
                <PublicRoute redirectTo="/contacts" component={<LoginPage />} />} /> 
              <Route path="/contacts" element={
                <PrivateRoute redirectTo="/login" component={<ContactsPage />} />} /> 
            </Route>
        </Routes>
        </Suspense>
    )}
    </>
  )
}

export default AppH