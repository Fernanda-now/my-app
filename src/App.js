import React, {useState} from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
//import { Sidebar } from './components/layout/Sidebar';
import { ProjectsProvider,SelectedProjectProvider  } from './context';
import PropTypes from 'prop-types';
//export manera de simplificar la funcion de App con const

export const App = ({ darkModeDefault = false }) => {
    const [darkMode, setDarkMode] = useState(darkModeDefault);

    console.log(darkModeDefault);
    return (
      <SelectedProjectProvider>
        <ProjectsProvider>
          <main
            data-testid="application"
            className={darkMode ? 'darkmode' : undefined}
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Content />
          </main>
        </ProjectsProvider>
      </SelectedProjectProvider>
    );
  };
  
  App.propTypes = {
    darkModeDefault: PropTypes.bool,
  };