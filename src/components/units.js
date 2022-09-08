import { Box } from '@mui/material';
import { Space } from './spaces';

export function Unit(props) {
const {unitData} = props

  console.log('UNITTT', unitData )
  return (
    <Box>
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
