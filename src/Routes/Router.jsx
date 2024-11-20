import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AdventureDetails from "../Pages/AdventureDetails";
import PrivateRoute from "../Private/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/adventures.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/details/:id',
                loader: async ({params}) => {
                    const res = await fetch('/adventures.json');
                    const data = await res.json();
                    const singleData = data.find(info => info.id == params.id);
                    return singleData;
                },
                element: <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>
            }
        ]
    }
])

export default router;