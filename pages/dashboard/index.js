import React from 'react'
import BottomNavBar from '@components/BottomNavigation/BottomNavBar'
import NavBar from '@components/NavBar/NavBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CreditCard from '@components/Dashboard/creditCard'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'

function DashBoard() {
  return (
    <>
        <NavBar />
        <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 8 }}
          >
            <Grid item xs={2} sm={3} md={3} key={1}>
              <CreditCard />
            </Grid>
            <Grid item xs={2} sm={3} md={5} key={2}>
              
            </Grid>
            </Grid>
        </Box>
        </Container> 
        <BottomNavBar />
    </>
  )
}

export default DashBoard