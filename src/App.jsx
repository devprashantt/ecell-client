import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import { Home, About, Contact, Team, Events, NotFound } from "./pages";
import { Layout } from "./components";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
          </Routes>
        </Layout>
      ),
    },
    {
      path: "/events",
      element: (
        <Layout>
          <Routes>
            <Route path="/" element={<Events />} />
          </Routes>
        </Layout>
      ),
    },
    {
      path: "/contact",
      element: (
        <Layout>
          <Routes>
            <Route path="/" element={<Contact />} />
          </Routes>
        </Layout>
      ),
    },
    {
      path: "/Team",
      element: (
        <Layout>
          <Routes>
            <Route path="/" element={<Team />} />
          </Routes>
        </Layout>
      ),
    },
    {
      path: "*",
      element: (
        <Layout>
          <NotFound />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
