/** @format */

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import Home from '../Home/Home';
import Tech from '../Projectz/Tech';
import Skills from '../skillsY/Skills';
import Bonga from '../Bonga/Bonga';
import About from '../About/About';
import TechStack from '../Projectz/TechStack';

const AnimatedRoutes = ({
  changeTheme,
  theme,
  font,
  changeFont,
  now,
  changeNow,
  active,
  changeActive,
}) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route
            path="/"
            element={
              <Home
                changeTheme={changeTheme}
                theme={theme}
                changeFont={changeFont}
                font={font}
                now={now}
                changeNow={changeNow}
                active={active}
                changeActive={changeActive}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                changeTheme={changeTheme}
                theme={theme}
                changeFont={changeFont}
                font={font}
                now={now}
                changeNow={changeNow}
                active={active}
                changeActive={changeActive}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <TechStack
                changeTheme={changeTheme}
                theme={theme}
                changeFont={changeFont}
                font={font}
                now={now}
                changeNow={changeNow}
                active={active}
                changeActive={changeActive}
              />
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <Tech
                changeTheme={changeTheme}
                theme={theme}
                changeFont={changeFont}
                font={font}
                now={now}
                changeNow={changeNow}
                active={active}
                changeActive={changeActive}
              />
            }
          />
          <Route
            path="/skills"
            element={
              <Skills
                changeTheme={changeTheme}
                theme={theme}
                changeFont={changeFont}
                font={font}
                now={now}
                changeNow={changeNow}
                active={active}
                changeActive={changeActive}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Bonga
                changeTheme={changeTheme}
                theme={theme}
                changeFont={changeFont}
                font={font}
              />
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
