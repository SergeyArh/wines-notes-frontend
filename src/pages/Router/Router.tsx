import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../LoginPage/LoginPage";
import { FallbackComponent } from "../../ErrorBoundary/FallbackComponent";
import { SingUpPage } from "../SingUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/singup"
        element={<SingUpPage />}
        ErrorBoundary={FallbackComponent}
      />

      <Route
        path="/signin"
        element={<LoginPage />}
        ErrorBoundary={FallbackComponent}
      />

      {/* <Route path="/" element={<Pallete />} ErrorBoundary={}>
        <Route path="singup" element={<SingUpPage />} />
        <Route path="signin" element={<LoginPage />} />
      </Route> */}

      <Route path="*" element={<Navigate to={"/singup"} replace />} />
    </>,
  ),
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
