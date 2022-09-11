import { Box, Button } from '@mui/material';
import { useState } from 'react';
import  data from '../assets/buildingData.json';
import { Floor } from './floors';

export function FloorTabs() {
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
    mapFloorNameToLevel(selectedFloorName)
  }
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: 'row',
          justifyContent:'center',
        }}
      >
        {data.floors.map((floor)=> {
          return (
            <Box>
              <Button
              variant="contained"
              onClick={handleClick}
              style={{padding: 5, margin: 10, backgroundColor: '#efbb41' }}
              >
                {floor.name}
              </Button>
            </Box>
            )
        })}
      </Box>
      <Box
        style={{
         display: "flex",
         flexDirection: 'row',
         justifyContent:'center',
        }}
      >
        <Floor floorData={data.floors[currentFloorLevel]}/>
      </Box>
    </Box>
  );
}
