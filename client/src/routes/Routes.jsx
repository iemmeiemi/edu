import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingLayout } from "../Layouts/LandingLayout/LandingLayout";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Auth/Register";
import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";
import { homeLoader } from "../pages/Home/HomeLoader";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";
import CourseMain from "../pages/Course/List/CourseMain";
import { CreateNewCourse } from "../pages/Course/Create/CreateNewCourse";
import { CourseDetail } from "../pages/Course/Detailed/CourseDetail";
import { CreateNewClass } from "../pages/Course/Create/CreateNewClass";
import ClassList from "../pages/Course/List/ClassList";
import { ClassMain } from "../pages/Course/List/ClassMain";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const data = await homeLoader();
          return data;
        },
        // action: async ({ request }) => {
        //   let formData = await request.formData();
        //   let title = formData.get("title");
        //   let project = await someApi.updateProject({ title });
        //   return project;
        // },
      },
      { path: "all-course", Component: CourseMain },
      {
        path: "create-course",
        Component: CreateNewCourse,
      },
      {
        path: "course/:id",
        Component: CourseDetail,
      },
      {
        path: "create-class",
        Component: CreateNewClass,
      },
      {
        path: "create-class/:id",
        Component: CreateNewClass,
      },
      {
        path: "all-class",
        Component: ClassMain,
      },
      {
        path: "all-class/:id",
        Component: ClassMain,
      },
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
