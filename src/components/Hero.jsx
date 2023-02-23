import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { comCss } from './ComponentsCss'
import heroimg from '../image/hero-img.png'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  const classes = comCss();
  return (
    <Box className={classes.hero_section}>
      <Container maxWidth="lg">
        <Box className={classes.hero_banner}>
          <Box className={classes.hero_banner_laft}>
            <Typography variant="h2" component="h2" className={classes.hero_title}>
              Welcome to Geeks UI Learning Application
            </Typography>
            <Typography variant="h5" component="p" className={classes.hero_des}>
              Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
            </Typography>
            <Box className={classes.hero_button}>
              <Button sx={{ marginRight: "12px" }} ccomponent={NavLink} to="/" className={`${classes.button} ${classes.button_3}`}>Browse Courses</Button>
              <Button ccomponent={NavLink} to="/" className={`${classes.button} ${classes.button_1}`}>Are You Instructor?</Button>
            </Box>
          </Box>
          <Box className={classes.hero_banner_right}>
            <img src={heroimg} alt="hero img" className={classes.img_responsive} />
          </Box>
        </Box>
      </Container>
    </Box>

  )
}

export default Hero
