import { Box } from '@mui/material';
import { Radiator } from './radiator';

export function Space(props) {
const {spaceData} = props

  console.log('SPACEEE', spaceData )
  return (
    <Box>
      {spaceData.map((space) => {
        return (
          <Box>
            <h3>
              Space: {space.name}
            </h3>
            <Radiator radiatorData={space.radiators}/>
          </Box>
        )
      })}
    </Box>
  );
}
