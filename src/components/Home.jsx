import Container from '@mui/material/Container'
import Box  from '@mui/material/Box'
import React from 'react'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Home = () => {
  return (
      <>
          <Container fixed maxWidth="xl" sx={{my:5,display:"flex",justifyContent:"between",gap:10}}>
              <Box maxWidth="sm" sx={{fontSize:"25px"}}>
                  <h1>Design Your <br />Comfort Zone</h1>
                  <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores id vitae nostrum perspiciatis labore inventore quas voluptas assumenda cupiditate voluptate!</p>
                  <button>SHOP NOW</button>
              </Box>
              <img src={heroBcg} alt="" width={'400px'} height={'400px' } />
              <Box> 
                  
          </Box>
        </Container>
      </>
  )
}

export default Home