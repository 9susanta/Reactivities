import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashbord from "../../features/activities/dashboard/ActivityDashbord";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import RequireAuth from "./RequireAuth";
import LoginForm from "../../features/activities/account/LoginForm";
import RegisterForm from "../../features/activities/account/RegisterForm";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
             {element: <RequireAuth />, children: [
                { path: 'activities', element: <ActivityDashbord /> },
                { path: 'activities/:id', element: <ActivityDetailPage /> },
                { path: 'createActivity', element: <ActivityForm key='create' /> },
                { path: 'manage/:id', element: <ActivityForm /> },
            ]},
            {path:'', element:<HomePage/>},
            { path: 'login', element: <LoginForm /> },
            { path: 'register', element: <RegisterForm /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    }
])