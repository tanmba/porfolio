// Infos
export const LinkStyle = {
  '&::after': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '1px',
    backgroundColor: '#565656',
    opacity: 0,
    transform: 'translate(20%, -50%)',
    transition: '.5s ease-in-out'
  },

  '&:hover': {
    textDecoration: 'none',
    color: 'inherit',

    '&::after': {
      opacity: 1,
      transform: 'translate(0, -50%)'
    }
  }
}

export const InfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1200px',
  minHeight: '30rem',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
  marginBottom: '6rem',
  lineHeight: '5rem'
}

export const InfoDescriptionStyle = {
  width: '100%',
  margin: '0 auto',
  fontSize: '3.5rem',
  fontWeight: '300',
  color: '#21252980'
}

export const InfoImgStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '15rem',
  height: '24.5rem',
  position: 'relative',
  bottom: '5rem',
  backgroundColor: '#ffffff',
  border: '3px solid #ffb7c5e6',
  borderRadius: '6px',

  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '1rem',
    right: '-1rem',
    zIndex: -1,
    width: '15rem',
    height: '24.5rem',
    backgroundColor: '#ffb7c5e6',
    borderRadius: '6px'
  },

  img: {
    width: '90%',
    padding: '0.5rem',
    position: 'relative'
  }
}

export const InfoSpanStyle = {
  position: 'relative',
  fontWeight: 400,

  '&::after': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '1px',
    backgroundColor: '#212529',
    position: 'absolute',
    left: 0
  },

  a: {
    fontSize: '3.5rem',
    color: '#21252980',
    textDecoration: 'none',

    '&::after': {
      display: 'none'
    }
  }
}

export const ArrowLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  width: '7rem',
  padding: '5px',
  textDecoration: 'none',
  transform: 'rotate(-90deg)',
  position: 'absolute',
  bottom: 0,
  right: '-4rem'
}

export const ArrowStyle = {
  display: 'inline-flex',

  span: {
    position: 'relative',
    width: '14px',
    height: '2px',
    borderRadius: '2px',
    overflow: 'hidden',
    background: '#ffb7c5e6',
    zIndex: 2,

    '&:nth-child(1)': {
      transformOrigin: 'left bottom',
      transform: 'rotate(45deg) translate3d(8px, -10px, 0)'
    },

    '&:nth-child(2)': {
      transformOrigin: 'left bottom',
      transform: 'rotate(-45deg)'
    }
  }
}

export const ArrowLineStyle = {
  position: 'relative',
  marginLeft: '-14px',
  marginRight: '30px',
  width: '150px',
  height: '2px',
  background: '#ffb7c5e6',
  overflow: 'hidden',
  zIndex: 1
}

export const ArrowTextStyle = {
  position: 'absolute',
  left: '2.5rem',
  bottom: '-1rem',
  color: '#4A4A4A',
  fontSize: '0.7rem',
  textTransform: 'uppercase'
}

export const FooterStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
}

// Work
export const ExperiencesStyle = {
  position: 'relative',
  backgroundColor: '#1d1d1d',
  textAlign: 'center',
  color: '#f9fafa',
  paddingTop: '2rem',
  paddingBottom: '1rem'
}

export const SectionCountStyle = {
  fontFamily: 'Courier Prime',
  fontWeight: 'bold',
  position: 'absolute',
  left: 0,
  top: '6rem',
  transform: 'rotate(-90deg)',
  zIndex: 1
}

export const ExperiencesTitleStyle = {
  display: 'block',
  margin: '0 auto',
  letterSpacing: '0.5rem',
  opacity: '0.5',
  lineHeight: 1
}

export const ExperiencesLinksStyle = {
  width: 'fit-content',
  fontSize: '3rem',
  fontFamily: 'Helvetica Neue',
  position: 'relative',
  color: '#fff',

  '&:hover': {
    textDecoration: 'none',
    color: '#f9fafa',
    opacity: '0.5'
  },

  '&::after': {
    content: '""',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '100%',
    border: 'solid #565656',
    backgroundColor: '#fff',
    borderWidth: '0 0 1px'
  }
}

export const ExperiencesSubStyle = {
  fontFamily: 'Courier Prime',
  fontSize: '1rem',
  marginTop: '1.5rem'
}

export const ExperiencesContainerStyle = {
  display: 'flex',
  width: '50%',
  margin: '4rem auto'
}

export const ExperiencesDateStyle = {
  fontFamily: 'Courier New',
  fontSize: '3rem',
  display: 'block',
  minWidth: '15rem'
}

export const SocialsStyle = {
  display: 'flex',
  width: '50%',
  margin: '0 auto',
  justifyContent: 'space-around'
}

export const SocialLinkStyle = {
  width: 'fit-content',
  fontSize: '1.5rem',
  fontFamily: 'Helvetica Neue',
  position: 'relative',
  color: '#fff',

  '&:hover': {
    textDecoration: 'none',
    color: '#565656',
    opacity: '0.5'
  },

  '&::after': {
    content: '""',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '100%',
    border: 'solid #565656',
    backgroundColor: '#fff',
    borderWidth: '0 0 1px'
  }
}
