import { Box } from '@mui/material';
import { Unit } from './units';

export function Floor(props) {
const {floorData} = props

  return (
    <Box className="floor-border">
      <h1>Floor {floorData.name}</h1>
      <Unit
        unitData={floorData.units}
        floorSpaceData={floorData.spaces}
      />
    </Box>
  );
}
