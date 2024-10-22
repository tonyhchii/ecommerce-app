import ErrorPage from "./Components/ErrorPage";
import App from "./App";
import ContentPage from "./Components/ContentPage";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/LastThirty",
        element: <ContentPage />,
      },
    ],
  },
];

export default routes;
