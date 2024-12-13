import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import { router } from "./routes";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};
