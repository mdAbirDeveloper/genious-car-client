import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CheckOut from "../../pages/Home/checkOut/CheckOut";
import Home from "../../pages/Home/Home/Home";
import Products from "../../pages/Home/Home/popularProducts/Products";
import Teames from "../../pages/Home/Home/teams/Teames";
import Login from "../../pages/login/Login";
import Orders from "../../pages/orders/Orders";
import Register from "../../pages/register/Register";
import PrivetRoute from "../privetRouter/PrivetRoute";
import About from "../../pages/Home/Home/about/About";
import Services from "../../pages/Home/Home/services/Services";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: 'teames',
          element: <Teames></Teames>
        },
        {
          path: 'checkout/:id',
          element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
          loader: ({params}) => fetch(`https://genius-car-sercver.vercel.app/services/${params.id}`)
        },
        {
          path: '/orders',
          element: <PrivetRoute><Orders></Orders></PrivetRoute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/services',
          element: <Services></Services>
        }

      ]
      
    }
  ]);


export default router;
