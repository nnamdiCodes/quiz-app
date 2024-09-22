import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './components/Home'
import QuizPage from "./components/QuizPage";
import QuizScore from "./components/QuizScore";

function App() {
  /* const [isDarkMode, setIsDarkMode] = useState( () => {
    const savedPreference = localStorage.getItem('isDarkMode');

    if (savedPreference !== null) {
      return JSON.parse(savedPreference);
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    }); */

    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')) || window.matchMedia('(prefers-color-scheme: dark)').matches)

useEffect(() => {
  /* update the body class based on the isDarkMode state */
  document.body.className = isDarkMode ? 'darkMode' : 'lightMode';
  
  /* save the user preference to localStorage */
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode)); 
}, [isDarkMode]);

const handleClick = () => {
  setIsDarkMode(prevMode => !prevMode);
};

  return (
    <Routes>
      <Route path="/" element={<Layout handleClick={handleClick} isDarkMode={isDarkMode} />}>
        <Route index element={<Home/>}/>
        <Route path="quiz" element={<QuizPage />} />
        <Route path="/score" element={<QuizScore />} />
      </Route>
    </Routes>
  );
}

export default App;
