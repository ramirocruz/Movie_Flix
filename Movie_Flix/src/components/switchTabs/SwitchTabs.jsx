import React, {useState} from 'react'
import './style.css'

const SwitchTabs = ({data, onTabChange }) => {
    const [selectedTab,setSelectedTab] = useState(0);
    const [left,setLeft] = useState(0); 
    const activeTab = (tab,index) => {
        setLeft(index*100);
        setSelectedTab(index);
        onTabChange(tab);
    };
  return (
    <div className="switchingTabs">
        <div className="tabItems">
            {data.map((tab,index) => (
                <span 
                key={index} 
                className={`tabItem ${selectedTab === index ? 'active' : ''}`}
                onClick={() => activeTab(tab,index)}
                >
                    {tab}
                </span>
            ))}

            <span className="movingBackground" style={{left:left}} />
        </div>
    </div>
  )
}

export default SwitchTabs