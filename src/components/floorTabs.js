import { Box, Button } from '@mui/material';
import { useState } from 'react';
import  data from '../assets/buildingData.json';
import { Floor } from './floors';

export function FloorTabs() {
  // const [currentFloorName, setCurrentFloorName] = useState(0)
  const [currentFloorLevel, setCurrentFloorLevel] = useState(0)


  const mapFloorNameToLevel = (selecteFloorName) => {
    for (let i = 0; i < data.floors.length; i++) {
      const currentFloor = data.floors[i];
      if (currentFloor.name === selecteFloorName) {
        setCurrentFloorLevel(currentFloor.level -1)
      }
    }
  }

  const handleClick = (event) => {
    const selectedFloorName = event.target.textContent
    // setCurrentFloorName(selectedFloorName)
    mapFloorNameToLevel(selectedFloorName)
  }
  return (
    <Box
      style={{ display: "flex", flexDirection: 'row', padding: 10, margin: 10, justifyContent:"center" }}
    >
      {data.floors.map((floor)=> {
        return (
          <Box>
            <Button
            onClick={handleClick}
            >
              {floor.name}
            </Button>
          </Box>
          )
      })}
      <Floor floorData={data.floors[currentFloorLevel]}/>
    </Box>
  );
}
