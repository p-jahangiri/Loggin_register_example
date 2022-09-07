import { Home, register, login, Profile } from "pages";

export const routes = [
      {
            element: Home,
            path: "/",
      },
      {
            element: register,
            path: "/register",
      },
      {
            element: login,
            path: "/login",
      },
      {
            element: Profile,
            path: "/profile",
      },
];
