import React from "react";
import PropsIn2 from "./PropsIn2";

export default function PropsOut2({profile}) {
    // const {profile}=props;
    return (
    <>
      <div className="d-flex">
        {profile?.map((data) => {
          return (
            <div className="card round-lg">
              <PropsIn2
                size={data.size}
                url={data.url}
                name={data.name}
                dept={data.dept}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
