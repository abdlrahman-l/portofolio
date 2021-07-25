import React from 'react';
import logo from './logo.svg';
import './style.css';
import AnimationRevealPage from './helpers/AnimationRevealPage';
import Hero from "./components/hero/TwoColumnWithPrimaryBackground"
import ThreeColContactDetails from './components/cards/ThreeColContactDetails';

const description = 'I was developing / creating website application using React, php (CodeIgniter) and mobile application using React Native and Android Native. I like to solve problem through code, data structure and algorithm'
function App() {
  return (
    <>
      <AnimationRevealPage>
        <Hero heading={"Hi.. I'm Abdul Rahman and I'm Software Engineer"}
          description={description} />
      </AnimationRevealPage>
      <AnimationRevealPage>
        <ThreeColContactDetails />
      </AnimationRevealPage>
    </>
  );
}

export default App;
