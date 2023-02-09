import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes, ProtectRoutes, ManagementRoutes } from "./index"
import { INTERNAL_PATHS } from "../config/routes.config";
import React from "react";

const LazyHomePage = React.lazy(() => import("../pages/homePage/homePage"))
const LazyERORPage = React.lazy(() => import("../pages/notFound/not-found.page"))
const LazyCategyrtPage = React.lazy(() => import("../pages/categoryPage/categoryPage"))
const LazyLoginPage = React.lazy(() => import("../pages/loginPage/LoginPage"))
const LazyManagement = React.lazy(() => import("../pages/management/Management"))
const LazyOrders = React.lazy(() => import("../pages/orders/Orders"))
const LazyProducts = React.lazy(() => import("../pages/products/Products"))
const LazyInventory = React.lazy(() => import("../pages/inventory/Inventory"))
const LazyCommodityPage = React.lazy(() => import("../pages/commodityPage/CommodityPage"))
const LazyCartPage = React.lazy(() => import("../pages/cartPage/CartPage"))
const LazyInformationPage = React.lazy(() => import("../pages/informationPage/InformationPage"))
const LazyPaymentPage = React.lazy(() => import("../pages/paymentPage/PaymentPage"))
const LazyResultPage = React.lazy(() => import("../pages/resultPage/ResultPage"))

export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path={INTERNAL_PATHS.HOME} element={<LazyHomePage />} />
                    <Route path={INTERNAL_PATHS.EROR404} element={<LazyERORPage />} />
                    <Route path={INTERNAL_PATHS.CATEGORY} element={<LazyCategyrtPage />} />
                    <Route path={INTERNAL_PATHS.LOGIN} element={<LazyLoginPage />} />
                    <Route path={INTERNAL_PATHS.COMMODITY} element={<LazyCommodityPage />} />
                    <Route path={INTERNAL_PATHS.CART} element={<LazyCartPage />} />
                    <Route path={INTERNAL_PATHS.INFORMATION} element={<LazyInformationPage />} />
                    <Route path={INTERNAL_PATHS.PAYMENT} element={<LazyPaymentPage />} />
                    <Route path={INTERNAL_PATHS.REULT} element={<LazyResultPage />} />
                    <Route path={INTERNAL_PATHS.MANAGEMENT} element={<ManagementRoutes />}>
                        <Route index element={<LazyManagement />} />
                        <Route path={INTERNAL_PATHS.ORDERS} element={<LazyOrders />} />
                        <Route path={INTERNAL_PATHS.PRODUCTS} element={<LazyProducts />} />
                        <Route path={INTERNAL_PATHS.INVENTORY} element={<LazyInventory />} />
                    </Route>
                </Route>
                <Route element={<PrivateRoutes />}>
                </Route>
                <Route element={<ProtectRoutes />}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}