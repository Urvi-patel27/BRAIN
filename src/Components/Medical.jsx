import React from "react";
import MedicalHero from "./Medical/MedicalHero";
import MedicalMain from "./Medical/MedicalMain";
import MedicalLast from "./Medical/MedicalLast";


function Medical() {
    return (
        <div>
            <MedicalHero />
            <MedicalMain />
            <MedicalLast />
        </div>
    );
}

export default Medical;
