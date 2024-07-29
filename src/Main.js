import React from "react";
import LeftPanel from "./LeftPanel.js";
import CentralPanel from "./CentralPanel.js";
import RightPanel from "./RightPanel.js";

class Main extends React.Component{
    render(){
        return(<main className="container">
            <LeftPanel />
            <CentralPanel />
            <RightPanel />
        </main>)
        }
}

export default Main