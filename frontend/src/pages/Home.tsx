import { Grid,Typography,Box } from '@mui/material'
import React from 'react'
import Feed from '../components/Feed'
import LeftSideBar from '../components/LeftSideBar'

function Home() {
  return (
    <Grid container spacing={4} >
        <Grid item md={3} xs={12} >
            <LeftSideBar />   
        </Grid>
        <Grid item md={6} >

            <Feed />
        </Grid>
        
        <Grid item md={3} >
         

          Right
        </Grid>
    </Grid>
  )
}

export default Home