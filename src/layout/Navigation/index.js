import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { NavigationStyle, NavigationLinkStyle, ButtonStyle, ShadowStyle } from '../Navigation/Navigation.style'

const Navigation = () => {
  return (
    <Box sx={NavigationStyle}>
      <Link style={NavigationLinkStyle} to="/stuff">
        <Box sx={ButtonStyle}>STUFF</Box>
        <Box sx={ShadowStyle}></Box>
      </Link>
    </Box>
  )
}

export default Navigation
