import React from "react";
import { Tile } from "../tile/Tile.js";

export const TileList = ({dataArray}) => {
  return (
    <div>
      {dataArray.map((dataItem,index) =>{
        return <Tile dataItem={dataItem} key={index} />
      })}
    </div>
  );
};
