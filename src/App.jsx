import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Events,
  Leaderboard,
  NotFound,
  EventDetails,
  College,
} from "./pages";

import {
  Admin,
  AdminLogin,
  CreateEvent,
  EditEvent,
  PointsDistribution,
} from "./admin";

import { Layout } from "./components";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const scrollToTop = () => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };

    try {
      window.scrollTo(scrollOptions);
    } catch (error) {
      // Scroll to top fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />

        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/college/:collegeId" element={<College />} />

        {isLoggedIn ? (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/create-event" element={<CreateEvent />} />
            <Route
              path="/admin/points-distribution"
              element={<PointsDistribution />}
            />
            <Route path="/admin/edit-event/:id" element={<EditEvent />} />
          </>
        ) : (
          <Route path="/admin" element={<AdminLogin />} />
        )}

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
