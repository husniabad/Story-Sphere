import { Explore, Group, Home, LibraryBooks, RecentActors } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

function LeftSideBar() {
  return (
    <Box position='sticky'
    height='max-content'
    flexDirection='column'
    >
      <Box>my name is</Box>
      <Box
      borderRadius="1rem"
      boxShadow='0 3px 10px rgb(0 0 0 / 0.2)'
      marginTop='2rem'
      width='100%'
      flexDirection='column'
      >
        <Box
        display='flex'
        alignItems='center'
        height='4rem'
        gap='1rem'
        pl={1.5}
        sx={{
          ":hover":{
            bgcolor:'grey.200'
          }
        }}
        

         > <Home fontSize='large' /><Typography variant='h5'>Home</Typography>
        </Box>
        <Box
        display='flex'
        alignItems='center'
        height='4rem'
        gap='1rem'
        pl={1.5}
        sx={{
          ":hover":{
            bgcolor:'grey.200'
          }
        }}

        

         ><Explore fontSize='large'/><Typography variant='h5'>Explore</Typography>
        </Box>
        <Box
        display='flex'
        alignItems='center'
        height='4rem'
        gap='1rem'
        pl={1.5}
        sx={{
          ":hover":{
            bgcolor:'grey.200'
          }
        }}

        

         ><LibraryBooks fontSize='large'/><Typography variant='h5'>Library</Typography>
        </Box>
        <Box
        display='flex'
        alignItems='center'
        height='4rem'
        gap='1rem'
        pl={1.5}
        sx={{
          ":hover":{
            bgcolor:'grey.200'
          }
        }}
        

         ><RecentActors fontSize='large'/><Typography variant='h5'>Yor Posts</Typography>
        </Box>
        <Box
        display='flex'
        alignItems='center'
        height='4rem'
        gap='1rem'
        pl={1.5}
        sx={{
          ":hover":{
            bgcolor:'grey.200'
          }
        }}
        

         ><Group fontSize='large'/><Typography variant='h5'>Your Followers</Typography>
        </Box>


      </Box>
    </Box>
  )
}

export default LeftSideBar