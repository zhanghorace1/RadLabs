import { Box } from '@mui/material';

export function Node(props) {
const {nodeData} = props

  console.log('NODEEE', nodeData )
  return (
    <Box>
      {nodeData?.map((node) => {
        return (
          <Box>
            <h5>
              Last Message: {node.last_message}
              LORA EUID #: {node.lora_euid}
              Radiator Temperature: {node.radiator_temperature}
              Room Temperature: {node.room_temperature}
            </h5>
          </Box>
        )
      })}
    </Box>
  );
}
