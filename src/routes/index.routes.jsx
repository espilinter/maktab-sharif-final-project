import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes, ProtectRoutes } from "./index"
import { INTERNAL_PATHS } from "../config/routes.config";
import React from "react";

const LazyHomePage = React.lazy(() => import("../pages/homePage/homePage"))
const LazyERORPage = React.lazy(() => import("../pages/notFound/not-found.page"))



export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path={INTERNAL_PATHS.HOME} element={<LazyHomePage />} />
                    <Route path={INTERNAL_PATHS.HOME} element={<LazyERORPage />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                </Route>
                <Route element={<ProtectRoutes />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}