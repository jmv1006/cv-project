import React, { Component } from "react";
import './cvModule.css'

const CvExperience = ({children}) => {
    return(
        <div className="cvContainer">
            {children}
        </div>
    );
};

export default CvExperience;