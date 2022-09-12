import { Box } from '@mui/material';

export function Node(props) {
const {nodeData} = props

  return (
    <Box className='node-border'>
      {nodeData?.map((node) => {
        return (
          <Box key={node.lora_euid} className='node'>
            {node.offline ?
              <h5 className='node-warning'>
                {node.offline}
              </h5>
            :
              <h5
              className={node.radiator_temperature < 200 ? 'node-warning' : 'node-normal'}
              >
                Last Message: { (new Date(node.last_message)).toLocaleString()} <br />
                LORA EUID #: {node.lora_euid} <br />
                Radiator Temperature: {node.radiator_temperature} <br />
                Room Temperature: {node.room_temperature} <br />
              </h5>
            }
          </Box>
        )
      })}
    </Box>
  );
}
