import { Route, Routes } from "react-router-dom";

// Views and Components
import Home from "./../views/home/Home";
import NotFound from "./../components/notfound/NotFound";
import Projects from "../views/projects/Projects";
import Resume from "../views/resume/Resume";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
