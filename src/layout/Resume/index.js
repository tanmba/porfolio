import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { NavigationStyle, NavigationLinkStyle, ButtonStyle, ShadowStyle } from '../Navigation/Navigation.style'
import { ArrowLineStyle, ArrowLinkStyle, ArrowStyle } from '../Home/Home.style'
import {
  ResumeStyle,
  ProjectStyle,
  ProjectItemStyle,
  ProjectItemImgInnerStyle,
  ProjectItemImgStyle,
  ProjectItemLinkStyle,
  ProjectItemTitleStyle
} from './Resume.Style'
import rhode from '../../assets/media/rhode.jpg'
import togo from '../../assets/media/togo.jpg'
import random from '../../assets/media/gg.jpg'

const Resume = () => {
  const theme = useTheme()
  const breakpoint = useMediaQuery(theme.breakpoints.down('sm'))

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const imageInner1 = ref1.current
  const imageInner2 = ref2.current
  const imageInner3 = ref3.current

  const mouseEnter1 = () => {
    // Image 1
    gsap.killTweensOf(imageInner1)
    gsap.to(imageInner1, {
      duration: 2,
      ease: 'power4',
      scale: 1.2
    })
  }

  const mouseEnter2 = () => {
    // Image 2
    gsap.killTweensOf(imageInner2)
    gsap.to(imageInner2, {
      duration: 2,
      ease: 'power4',
      scale: 1.2
    })
  }

  const mouseEnter3 = () => {
    // Image 3
    gsap.killTweensOf(imageInner3)
    gsap.to(imageInner3, {
      duration: 2,
      ease: 'power4',
      scale: 1.2
    })
  }

  const mouseLeave1 = () => {
    // Image 1
    gsap.killTweensOf(imageInner1)
    gsap.to(imageInner1, {
      duration: 0.7,
      ease: 'expo',
      scale: 1
    })
  }

  const mouseLeave2 = () => {
    // Image 2
    gsap.killTweensOf(imageInner2)
    gsap.to(imageInner2, {
      duration: 0.7,
      ease: 'expo',
      scale: 1
    })
  }

  const mouseLeave3 = () => {
    // Image 3
    gsap.killTweensOf(imageInner3)
    gsap.to(imageInner3, {
      duration: 0.7,
      ease: 'expo',
      scale: 1
    })
  }

  useEffect(() => {
  }, [])

  return (
    <React.Fragment>
      <Box sx={ResumeStyle}>
        <Box sx={{ ...NavigationStyle, position: 'absolute', right: '-2rem' }}>
          <Link style={NavigationLinkStyle} to="/">
            <Box sx={ButtonStyle}>HOME</Box>
            <Box sx={ShadowStyle}></Box>
          </Link>
        </Box>
        <Box>
          <Box sx={{ fontFamily: 'Taviraj, serif', fontStyle: 'italic', fontSize: '3.5rem' }}>Memories about my past trips</Box>
          <Box sx={{ fontSize: '1.5rem', maxWidth: '40rem', margin: '0 auto' }}>I decided to combine my three passions: photography, video making, code and present you these three projects.</Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', top: '10rem' }}>
          <Box sx={{ fontSize: '1rem' }}>Scroll, if you wish</Box>
          <Box sx={{ ...ArrowLinkStyle, position: 'relative', right: 0, top: '2rem' }}>
            <Box component='span' sx={ArrowStyle}>
              <span></span>
              <span></span>
            </Box>
            <Box sx={ArrowLineStyle} component='span'></Box>
          </Box>
        </Box>
      </Box>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ ...ProjectStyle, gridArea: breakpoint ? 'content' : '', maxWidth: breakpoint ? '400px' : '75rem' }}>
          <Box sx={{ ...ProjectItemStyle, marginBottom: breakpoint ? '0' : '5rem' }}>
            <Box component='h2' sx={ProjectItemTitleStyle}>Rhodes, Greece</Box>
            <Box sx={ProjectItemImgStyle}><Box ref={ref1} sx={{ ...ProjectItemImgInnerStyle, backgroundImage: `url(${rhode})` }}></Box></Box>
            <Box
              component='a'
              sx={ProjectItemLinkStyle}
              onMouseEnter={() => mouseEnter1()}
              onMouseLeave={() => mouseLeave1()}
            >
              view
            </Box>
          </Box>
          <Box sx={{ ...ProjectItemStyle, marginBottom: breakpoint ? '0' : '5rem' }}>
            <Box component='h2' sx={ProjectItemTitleStyle}>Lomé, Togo</Box>
            <Box sx={ProjectItemImgStyle}><Box ref={ref2} sx={{ ...ProjectItemImgInnerStyle, backgroundImage: `url(${togo})` }}></Box></Box>
            <Box
              component='a'
              sx={ProjectItemLinkStyle}
              onMouseEnter={() => mouseEnter2()}
              onMouseLeave={() => mouseLeave2()}
            >
              view
            </Box>
          </Box>
          <Box sx={{ ...ProjectItemStyle, marginBottom: breakpoint ? '0' : '5rem' }}>
            <Box component='h2' sx={ProjectItemTitleStyle}>Jimmy Hughes</Box>
            <Box sx={ProjectItemImgStyle}><Box ref={ref3} sx={{ ...ProjectItemImgInnerStyle, backgroundImage: `url(${random})` }}></Box></Box>
            <Box
              component='a'
              sx={ProjectItemLinkStyle}
              onMouseEnter={() => mouseEnter3()}
              onMouseLeave={() => mouseLeave3()}
            >
              view
            </Box>
          </Box>
        </Box>
      </motion.div>
    </React.Fragment>
  )
}

export default Resume
