import { Box, Button } from '@mui/material';
import  data from '../assets/buildingData.json';
import { FloorTable } from './floorTable';

export function FloorTabs() {
  return (
    <Box
    style={{ display: "flex", flexDirection: 'row', padding: 10, margin: 10, justifyContent:"center" }}
    >
      {data.floors.map((floor)=> {
        return (
          <Box>
          <Button>
            {floor.name}
          </Button>
          <FloorTable floorData={floor}/>
          </Box>
          )
      })}
    </Box>
  );
}
