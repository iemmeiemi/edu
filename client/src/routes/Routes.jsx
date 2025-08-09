import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Auth/Register";
import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await res.json();
          return { data: data };
        },
        // action: async ({ request }) => {
        //   let formData = await request.formData();
        //   let title = formData.get("title");
        //   let project = await someApi.updateProject({ title });
        //   return project;
        // },
      },
      // { path: "about", Component: About },
    ],
  },
  // {
  //   path: "/auth",
  //   Component: AuthLayout,
  //   children: [
  //     { path: "register", Component: Register },
  //     // { path: "login", Component: Login },
  //   ],
  // }
]);

export default router;
