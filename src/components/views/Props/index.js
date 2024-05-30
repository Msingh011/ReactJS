import React from "react";
import PropsOut1 from "./Props1/PropsOut";
import PropsOut2 from "./Props2/PropsOut2";
import media from "../../media";

export default function AllProps ()  {
    return (
        <>
        <PropsOut1/>

        <p className="mt-5 mb-1 font-weight-bold">Props Through Array</p>
        <PropsOut2 
            profile={[{name: "A", dept: "IT", size: 150, url: media.logo}, 
            {name: "B", dept: "IT", size: 150, url: media.logo},
            {name: "C", dept: "IT", size: 150, url: media.logo}]}
        />
        </>
    )
}