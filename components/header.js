import React from 'react'
import {Text , Box , Container , Heading, Card, Image ,Button, Gradient, Flex, Link, Grid} from 'theme-ui'

import ColorSwitcher from './color-switcher'
export default function header() {
    return (
    <>
        <div>
        <Container variant='wide' >
        <Box  p = '15px'>
        <Flex>
        <Grid > 
        <Box  ml = 'auto' mt='auto' mb ='auto'>
          <Button margin = '5px' variant="primary btn">About Us</Button>
          <Button margin = '5px' variant="primary btn">Registration</Button>
          <Button margin = '5px' variant="primary btn">FAQ </Button>
          <Button margin = '5px' variant="primary btn">Sponsors</Button>
          
        </Box>
        </Grid>
        </Flex>
        </Box>  
         
          <ColorSwitcher />
        </Container>
        </div>
        </>
    )
}
