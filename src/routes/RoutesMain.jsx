import { Routes, Route, Navigate } from "react-router-dom"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { DashboardPage } from "../pages/DashboardPage/DashboardPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"

export const RoutesMain = () => {

   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />

         <Route element={<PublicRoutes />}>
            <Route index element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Route>

         <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
         </Route>

         <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   )
} 
