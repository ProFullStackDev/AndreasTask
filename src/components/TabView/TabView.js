import React, { useEffect, useState } from 'react';
import InsideTab from './InsideTab';
import './TabView.css'
const TabView =()=>{
  
    const [activeTab, setactiveTab] = useState(0)
    const tabItem = ['Arbeitnehmar', 'Arbeitgeber', 'Temporarburo']

    const refs = tabItem.reduce((acc, value) => {
      acc[value] = React.createRef();
      return acc;
    }, {});
   
    const handleClick = (id,index) => {
      // refs[id].current.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      // });
      if (index === 1) {
        document.querySelector(".tabs").style.justifyContent="center"
      } else if (index === 2) {
        document.querySelector(".tabs").style.justifyContent="flex-end"
      } else if (index === 0) {
        document.querySelector(".tabs").style.justifyContent="flex-start"
      }
      }
    return(
        <div>
          <div className="tabs"> 
           {tabItem.map((val, i)=> 
           {
            // const ref = React.createRef();
 
            // const handleClick = () =>
            //  ref.current !== null &&  ref.current.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start',
            //   });
             return (
           <div ref={refs[val]} key={val}className={`particular-tab text-theme-color ${i === 0 && 'tab-first'} ${i === (tabItem.length-1) && 'tab-last'} ${i === activeTab && 'activetab'}`} onClick={()=>{return setactiveTab(i),handleClick(val,i)}}> {val}</div>
           )}
           )}
          </div>
          <InsideTab tabindex={activeTab}/>
          
        </div>
    )
}
export default TabView;