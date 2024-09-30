import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Navbaar = () => {
  return (
    <div>
        <AppBar sx={{ backgroundColor: '#ffd800' }} id='cont'>
            <Toolbar>
            <img src='./src/assets/image.png' height={50}></img>
              <Typography variant='h3' color='#000'></Typography> 
                <Link to='/'>
                <Button variant='contained' id='home'>Home</Button>
                </Link>
                <Link to='/Add'>
                <Button variant='contained'id='add'>Add</Button>
                </Link>
            </Toolbar>
        </AppBar> <br /> <br /><br /><br />
    </div>
  )
}

export default Navbaar
