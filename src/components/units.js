import { Box } from '@mui/material';
import { Space } from './spaces';

export function Unit(props) {
const {unitData, floorSpaceData } = props

  return (
    <Box className="unit-border">
{/* SPACES THAT DO NOT BELONG TO UNITS */}
      {floorSpaceData ?
        floorSpaceData.map((floorSpace) => {
          return (
            <Box>
              <h2>
                Location: {floorSpace.name}
              </h2>
              <Space spaceData={[floorSpace]}/>
            </Box>
          )
        })
        :
        null
      }
{/* SPACES BELONGING TO UNITS */}
      {unitData.map((unit) => {
        return (
          <Box>
            <h2>
              Unit: {unit.name}
            </h2>
            <Space spaceData={unit.spaces}/>
          </Box>
        )
      })}
    </Box>
  );
}
