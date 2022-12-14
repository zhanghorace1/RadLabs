import { Box } from '@mui/material';
import { Radiator } from './radiators';

export function Space(props) {
const {spaceData} = props

  return (
    <Box className="space-border">
      {spaceData.map((space) => {
        if (space.radiators.length === 0) {space.radiators.push({number: 0})}
        return (
          <Box key={space.name} className='space'>
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
