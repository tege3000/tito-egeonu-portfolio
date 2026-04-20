import { useState } from "react";
import { Helmet } from "react-helmet";

import ScoreBar from "./components/ScoreBar";
import TitleScreen from "./components/TitleScreen";
import SkillsScreen from "./components/Skills";
import ExperienceScreen from "./components/Experience";
import EducationScreen from "./components/Education";
import ContactScreen from "./components/Contact";
import ProjectsScreen from "./components/ProjectsScreen";

function App() {
  const [screen, setScreen] = useState("title");
  const [score, setScore] = useState(0);

  const navigate = (target) => {
    setScreen(target);
    setScore(prev => prev + 100);
  };

  return (
    <div id="root">
      <Helmet>
        <title>Tito Egeonu Portfolio</title>
      </Helmet>

      <ScoreBar score={score} />

      {screen === "title" && <TitleScreen go={navigate} />}
      {screen === "skills" && <SkillsScreen go={navigate} />}
      {screen === "experience" && <ExperienceScreen go={navigate} />}
      {screen === "education" && <EducationScreen go={navigate} />}
      {screen === "contact" && <ContactScreen go={navigate} />}
      {screen === "projects" && <ProjectsScreen go={navigate} />}

    </div>
  );
}

export default App;