import { Box } from '@mui/material';
import { Unit } from './units';

export function Floor(props) {
const {floorData} = props

  console.log('FLOORRRR', floorData )
  return (
    <Box>
      <h1>Floor {floorData.name}</h1>
      <Unit unitData={floorData.units} />
    </Box>
  );
}
