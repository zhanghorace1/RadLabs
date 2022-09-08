import { Box } from '@mui/material';
import { Node } from './nodes';

export function Radiator(props) {
const {radiatorData} = props

  console.log('RADIATORRR', radiatorData )
  return (
    <Box>
      {radiatorData?.map((radiator) => {
        return (
          <Box>
            <h4>
              Radiator #: {radiator.number}
            </h4>
            <Node nodeData={radiator.nodes}/>
          </Box>
        )
      })}
    </Box>
  );
}
