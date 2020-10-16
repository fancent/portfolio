import React from 'react';
import styled from 'styled-components';
import './App.css';
import { NavBar, Background, Cursor, Contact } from './components';
import { Home, About, Project, Experience } from './pages';
import { HashRouter, Route} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const routes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/project', Component: Project },
  { path: '/experience', Component: Experience },
]

function App() {

  console.log("%c Welcome to my website, feel free to inspect my code ", 'font-size: 12px; background: #f73859; color: white');

  return (
    <HashRouter basename='/'>
      <Cursor />
      <Background />
      <AppContent>
        <NavBar />
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        <Contact />
      </AppContent>
    </HashRouter>
  );
}

const AppContent = styled.div`
  // margin: 1em;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`

export default App;