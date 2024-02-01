
import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
 
import CreateProduct from "./views/1-Espace Vehicule/CreateProduct";
import Dashboard from "./views/4-Tableau de bord/Dashboard";
import EditProduct from "./views/1-Espace Vehicule/EditProduct";

import CreateMaint from "./views/2-Espace Maintenance/CreateMaint";
import EditMaint from "./views/2-Espace Maintenance/EditMaint";
import Maint from "./views/2-Espace Maintenance/maint";

import Consommation from "./views/3-Espace Consommation/Consommation";
import CreateConsommation from "./views/3-Espace Consommation/CreateConsm";

import ForgotPassword from "./views/1-a-Inscription Pages/ForgotPassword";
import HomePage from "./views/HomePage/Home";
import Login from "./views/1-a-Inscription Pages/Login";
import Notfound from "./views/1-a-Inscription Pages/Notfound";
import ResetPassword from "./views/1-a-Inscription Pages/ResetPassword";
import Signup from "./views/1-a-Inscription Pages/Signup";
import Users from "./views/1-Espace Vehicule/Users";
import EditConsm from "./views/3-Espace Consommation/EditConsm";

const router = createBrowserRouter([
    {path: '/',element: <DefaultLayout />,
        children: [
            { path: '/products ',element: <Navigate to="/products" />},
            { path: '/dashboard',element: <Dashboard />},

            { path: '/products',element: <Users />},
            { path: '/product/create',element: <CreateProduct />},
            { path: '/product/edit/:id',element: <EditProduct />},

            { path: '/maintenance', element: <Maint />},
            { path: '/maint/create', element: <CreateMaint />},
            { path: '/maint/edit/:id', element: <EditMaint />},

            { path: '/consm', element: <Consommation />},
            { path: '/consm/create', element: <CreateConsommation />},
            { path: '/consm/edit/:id', element: <EditConsm />},


            // { path: '/consm/edit/:id', element: <EditMaint />},
        ]
    },
    {
        path: '/',
        
        element: <GuestLayout />,
        children: [
            // INSCRIPTION :
            { path: '/products',element: <HomePage /> },
            { path: '/homepage',element: <HomePage /> },
            { path: '/login',element: <Login /> },
            { path: '/signup', element: <Signup />},
            { path: '/forgot-password',element: <ForgotPassword />},
            { path: '/rest_password', element: <ResetPassword />},

            // { path: '/profile', element: <Profile />},

        ]
    },
    {path: '*',element: <Notfound />
    },

])

export default router;
