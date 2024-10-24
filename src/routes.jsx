import ErrorPage from "./Components/ErrorPage";
import App from "./App";
import ContentPage from "./Components/ContentPage/ContentPage";
import HomePage from "./Components/HomePage/HomePage";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
const routes = [
  {
    path: "/games",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/games/",
        element: <ContentPage />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
