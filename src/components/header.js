import { Box } from '@mui/material';
import  data from '../assets/buildingData.json';
import radLabLogo from '../assets/radLabLogo.jpeg';

export function Header() {

  return (
    <Box
    style={{
      display: "flex",
      flexDirection: 'row',
      margin: 40,
      justifyContent:'flex-start',
    }}
    >
      <img src={radLabLogo} alt='Logo'className='logo'/>
      <p className='header-text' >{data.name}</p>
    </Box>
  );
}
