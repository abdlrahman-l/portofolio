import React from 'react';
import logo from './logo.svg';
import './style.css';
import AnimationRevealPage from './helpers/AnimationRevealPage';
import Hero from "./components/hero/TwoColumnWithPrimaryBackground"
import HeroVideo from "./components/hero/TwoColumnWithVideo"
import ThreeColContactDetails from './components/cards/ThreeColContactDetails';
import Timeline from 'components/timeline/Timeline';
import TwoColumn from 'components/hero/TwoColumn';
import ProfileCard from 'components/cards/ProfileCard';

const description = `I have been  developing / creating Web application 
 and Mobile application.
 I like to solve problem through code, data structure and algorithm`
function App() {
  return (
    <>
      <AnimationRevealPage>
        <Hero heading={"Hi. I'm Abdul Rahman, Software Engineer"}
          description={description} />
      </AnimationRevealPage>
      <AnimationRevealPage>
        <TwoColumn leftSide={<div style={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
        }}>
          <ProfileCard />
        </div>} rightSide={<p>asdas</p>} />
      </AnimationRevealPage>
      <AnimationRevealPage>
        <Timeline />
      </AnimationRevealPage>
    </>
  );
}

export default App;
