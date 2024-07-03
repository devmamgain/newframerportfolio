import React from 'react';
import ProjectSlider from './components/ProjectSlider';
import Details from './components/Details';
import SideBar from './components/SideBar';
import { BrowserRouter} from 'react-router-dom';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
import WorkProject from './components/WorkProject';



const App = () => {
  return (
    <BrowserRouter>
    <div className='flex gap-[25%]'>
    <ScrollToHashElement behavior="smooth"/>

    <SideBar/>
    <div className='w-full '>
    <ProjectSlider/>
     <div id="details"><Details/></div> 
    <WorkProject/>
      </div>
      </div>
      </BrowserRouter>
  );
};

export default App;
