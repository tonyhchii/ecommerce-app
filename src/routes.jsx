import ErrorPage from "./Components/ErrorPage";
import App from "./App";
import ContentPage from "./Components/ContentPage/ContentPage";
import HomePage from "./Components/HomePage/HomePage";
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
  },
];

export default routes;
