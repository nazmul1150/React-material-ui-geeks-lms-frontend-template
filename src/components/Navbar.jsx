import { Box, Container, Drawer, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { comCss } from './ComponentsCss'
import logo from '../image/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";


const Navbar = () => {
  const classes = comCss();
  const [openMenu, setOpenMenu] = useState(false);

  const [scrollNavbar, setScrollNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <Box className={scrollNavbar ? `${classes.navbar_section_active}` : `${classes.navbar_section}`}>
      <Container maxWidth="lg">
        <Box className={classes.navbar_box}>
          <Box className={classes.navbar_laft}>
            <Box className={classes.navbar_laft_logo}>
              <Link to="/">
                <img src={logo} alt="logo" className={classes.img_responsive} />
              </Link>
            </Box>
            <Box className={classes.navbar_laft_menu}>
              <Box className={classes.navbar_link_computer}>
                <Link to="/" className={`${classes.nav_link}`}>Home</Link>
                <Link to="about" className={`${classes.nav_link}`}>About</Link>
                <Link to="courses" className={`${classes.nav_link}`}>Courses</Link>
                <Link to="blog" className={`${classes.nav_link}`}>Blog</Link>
                <Link to="contact" className={`${classes.nav_link}`}>Contact</Link>
              </Box>
              <Box className={classes.navbar_link_mobail}>
                <IconButton onClick={() => setOpenMenu(!openMenu)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={'right'}
                  open={openMenu}
                  onClose={() => setOpenMenu(!openMenu)}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <IconButton onClick={() => setOpenMenu(!openMenu)} className={classes.clossessideNav}>
                    <CloseIcon />
                  </IconButton>
                  <Link to="/" className={`${classes.nav_link} ${classes.nav_link_mobail}`}>Home</Link>
                  <Link to="/about" className={`${classes.nav_link} ${classes.nav_link_mobail}`}>About</Link>
                  <Link to="/courses" className={`${classes.nav_link} ${classes.nav_link_mobail}`}>Courses</Link>
                  <Link to="/compareplan" className={`${classes.nav_link} ${classes.nav_link_mobail}`}>Compareplan</Link>
                  <Link to="/pricing" className={`${classes.nav_link} ${classes.nav_link_mobail}`}>Pricing</Link>
                  <Link to="/blog" className={`${classes.nav_link} ${classes.nav_link_mobail}`}>Blog</Link>
                  <Link to="/contact" className={`${classes.nav_link} ${classes.nav_link_mobail}`}>Contact</Link>
                </Drawer>
              </Box>
            </Box>
            {/* searchbar nav bar */}
            {/* <Box className={classes.navbar_laft_searchbar}>
              <SearchIcon className={classes.navbar_laft_searchbar_icon} />
              <InputBase
                placeholder="Search Courses"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box> */}
          </Box>
          {/* button left nav bar */}
          {/* <Box className={classes.navbar_right}>
            <Button component={NavLink} to="/" sx={{ marginRight: "12px" }} className={`${classes.button} ${classes.button_1}`}>SIgn In</Button>
            <Button component={NavLink} to="/" className={`${classes.button} ${classes.button_2}`}>SIgn Up</Button>
          </Box> */}
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
