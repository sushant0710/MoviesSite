import React,{useState} from 'react'
import "./style.scss"

const SwitchTabs = ({data,onTabChange}) => {
    // console.log(data)
    const [selectedTab,setSelectedTab] = useState(0)
    const [left,setLeft]= useState(0)
    // console.log(selectedTab,left)
    const activeTab = (tab,index) =>{
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTab(index)
        }, 300);
        onTabChange(tab,index)
    }
    return (
        <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab,index)=>(
            <span key={index} className={`tabItem ${selectedTab ===  index ? "active" : ""}`} onClick={()=>activeTab(tab,index)} >
            {tab}
            {/* {console.log(tab,"yyoo")} */}
        </span>
        ))}
        <span className="movingBg" style={{left}}/>
      </div>
    </div>
  )
}

export default SwitchTabs
