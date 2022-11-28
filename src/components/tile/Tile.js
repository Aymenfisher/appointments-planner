import React from "react";

export const Tile = ({ dataItem }) => {
  const dataItemArray = Object.entries(dataItem);
  return (
    <div className="tile-container">
      {dataItemArray.map((item,index) =>{
        return <p className={index===0 ? 'first-tile' : 'tile'}>{`${item[0]}: ${item[1]}`}</p>
      })}
    </div>
  );
};
