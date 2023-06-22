import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Events,
  CreateEvent,
  Leaderboard,
  NotFound,
  EventDetails,
  College,
} from "./pages";

import { Layout } from "./components";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/create-event" element={<CreateEvent />} />

        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/college/:collegeId" element={<College />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
