import { createBrowserRouter } from "react-router-dom";
import { CurrentUser, Users } from "@/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
    children: [],
  },
  {
    path: "/users/:id",
    element: <CurrentUser />,
  },
]);
