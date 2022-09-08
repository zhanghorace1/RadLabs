import { Box, Button } from '@mui/material';

export function FloorTable(floorData) {


  console.log('FLOORRRR', floorData )
  return (
    <Box>
      <h1>This is {floorData.floorData.name}</h1>

    </Box>
  );
}
