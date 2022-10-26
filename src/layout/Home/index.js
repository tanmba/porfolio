import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Box } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import {
  LinkStyle,
  InfoStyle,
  InfoSpanStyle,
  InfoDescriptionStyle,
  InfoImgStyle,
  ExperiencesStyle,
  ArrowLinkStyle,
  ArrowStyle,
  ArrowLineStyle,
  ArrowTextStyle,
  SectionCountStyle,
  ExperiencesTitleStyle,
  ExperiencesLinksStyle,
  ExperiencesSubStyle,
  ExperiencesContainerStyle,
  ExperiencesDateStyle,
  SocialsStyle,
  SocialLinkStyle
} from './Home.style'
import me from '../../assets/media/me.GIF'
import CV from '../../assets/media/Tan-mbaTakougnadi.pdf'
import Navigation from '../Navigation/index'

const Home = () => {
  const theme = useTheme()
  const breakpoint = useMediaQuery(theme.breakpoints.down('sm'))

  const TransparentTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'transparent'
    }
  }))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Navigation />

      <Box sx={InfoStyle}>
        <Box sx={InfoDescriptionStyle} >
          I&apos;m&ensp;
          <TransparentTooltip
            title={<Box sx={InfoImgStyle}><img src={me} alt='' /></Box>}
            followCursor
          >
            <Box component='span' sx={InfoSpanStyle}>
              Tan-mba Takougnadi
            </Box>
          </TransparentTooltip>
          , a front-end developer based in Paris.
          <br />
          I graduated from <Box component='span' sx={InfoSpanStyle}><Box component='a' sx={LinkStyle} href="https://www.digital-campus.fr/" target="__blank">Digital campus Paris</Box></Box> where I studied web development, UX/UI Design,
          marketing and project management and <span>I&apos;m currently looking for a job.</span>
        </Box>
        <Box component='a' sx={ArrowLinkStyle} href="#">
          <Box component='span' sx={ArrowStyle}>
            <span></span>
            <span></span>
          </Box>
          <Box sx={ArrowLineStyle} component='span'></Box>
          <Box sx={ArrowTextStyle} component='span'>Work</Box>
        </Box>
      </Box>

      <Box sx={ExperiencesStyle}>
        <Box sx={SectionCountStyle}>experiences</Box>
        <Box>
          <AnimationOnScroll animateOnce='true' animateIn='animate__fadeInLeftBig'>
            <Box
              sx={{
                ...ExperiencesTitleStyle,
                width: breakpoint ? '' : '38rem',
                fontSize: breakpoint ? '1rem' : '6rem',
                textAlign: breakpoint ? 'center' : 'left'
              }}
              component='span'>
                About my experiences
            </Box>
          </AnimationOnScroll>
          <AnimationOnScroll delay='5' animateOnce='true' animateIn='animate__fadeInLeftBig'>
            <Box sx={ExperiencesContainerStyle}>
              <Box sx={{ ...ExperiencesDateStyle, textAlign: breakpoint ? 'center' : 'right' }} component='span'>
                  2021-2022
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '3rem', textAlign: 'left' }}>
                <Box sx={ExperiencesLinksStyle} component='a' href="https://www.efficity.com/" target="__blank">Efficity</Box>
                <Box sx={{ ...ExperiencesSubStyle, textAlign: breakpoint ? 'center' : 'left' }} component='span'>Front-end developer<br/>React.js/Next.js/Typescript</Box>
                <Box sx={{ fontFamily: 'Courier New' }} component='p'>
                  EffiCity is a new generation service platform allowing freelancers to develop their own real estate business.
                </Box>
              </Box>
            </Box>
          </AnimationOnScroll>
          <AnimationOnScroll delay='10' animateOnce='true' animateIn='animate__fadeInLeftBig'>
            <Box sx={ExperiencesContainerStyle}>
              <Box sx={{ ...ExperiencesDateStyle, textAlign: breakpoint ? 'center' : 'right' }} component='span'>
                  2017-2020
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '3rem', textAlign: 'left' }}>
                <Box sx={ExperiencesLinksStyle} component='a' href="https://www.legalstart.fr/" target="__blank">Legalstart</Box>
                <Box sx={{ ...ExperiencesSubStyle, textAlign: breakpoint ? 'center' : 'left' }} component='span'>Front-end developer<br/>React.js</Box>
                <Box sx={{ fontFamily: 'Courier New' }} component='p'>Legalstart is an online legal services platform which goal is to allow
                  entrepreneurs to manage all of their administrative, legal and accounting procedures
                  alone.</Box>
              </Box>
            </Box>
          </AnimationOnScroll>
          <AnimationOnScroll delay='15' animateOnce='true' animateIn='animate__fadeInLeftBig'>
            <Box sx={ExperiencesContainerStyle}>
              <Box sx={{ ...ExperiencesDateStyle, textAlign: breakpoint ? 'center' : 'right' }} component='span'>
                2017
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '3rem', textAlign: 'left' }}>
                <Box sx={ExperiencesLinksStyle} component='a' href>Kipic</Box>
                <Box sx={{ ...ExperiencesSubStyle, textAlign: breakpoint ? 'center' : 'left' }} component='span'>Front-end developer<br/>Angular.js</Box>
                <Box sx={{ fontFamily: 'Courier New' }} component='p'>
                  Kipic is a startup that seeks to revolutionize the user experience in creating
                  online photo albums. They use artificial intelligence to automate and enrich photo
                  albums with data.
                </Box>
              </Box>
            </Box>
          </AnimationOnScroll>
        </Box>

        <Box sx={SocialsStyle}>
          <Box sx={SocialLinkStyle} component='a' href="https://www.linkedin.com/in/tan-mbatakougnadi/" target="_blanck">Linkedin</Box>
          <Box sx={SocialLinkStyle} component='a' href="https://github.com/tanmba" target="_blanck">Github</Box>
          <Box sx={SocialLinkStyle} component='a' href={CV} target="_blanck">Resume</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
