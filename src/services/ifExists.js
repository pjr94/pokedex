import React from "react";

export default function getMultipliers(param, isArray){
    if (isArray === true){
        if (param.length > 0){
            return param;
        }
    }

    if (param === null || param === undefined){
        return <div></div>
    } else {
        return <div>{param}</div>
    }

}