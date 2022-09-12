import { Box } from '@mui/material';
import { Node } from './nodes';

export function Radiator(props) {
const {radiatorData} = props

  return (
    <Box className="radiator-border">
      {radiatorData.map((radiator) => {
        if (radiator.number > 0) {
          if (radiator.nodes.length === 0) {radiator.nodes.push({offline: 'RADIATOR NOT INSTALLED OR OFFLINE'})}
          return (
            <Box key={radiator.number} className='radiator' >
              <h4>
                Radiator #: {radiator.number}
              </h4>
              <Node nodeData={radiator.nodes}/>
            </Box>
          )
        } else {
          return (
            <Box className='radiator'>
              <h4>
                No radiators installed in this space
              </h4>
            </Box>
          )
        }

      })}
    </Box>
  );
}
