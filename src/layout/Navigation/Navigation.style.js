export const NavigationStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  top: '1.5rem',
  marginBottom: '2rem',
  position: 'relative',
  zIndex: 5
}

export const NavigationLinkStyle = {
  position: 'relative',
  top: 0,
  right: '2rem',
  fontFamily: 'Courier New',
  fontSize: '1.2rem',
  lineHeight: '2rem',

  '&:hover': {
    '&::after': {
      opacity: 0
    }
  }
}

export const ButtonStyle = {
  display: 'block',
  width: 'fit-content',
  color: '#21252980',
  padding: '0.5rem 1.5rem',
  fontWeight: 900,
  backgroundColor: '#fff',
  border: '3px solid #ffb7c5e6',
  borderRadius: '6px',
  position: 'relative',
  zIndex: 1,
  transition: 'transform .3s ease-in-out',

  '&:hover': {
    transform: 'translate3d(8px,8px,1px)'
  }
}

export const ShadowStyle = {
  content: '""',
  width: '100%',
  height: '100%',
  backgroundColor: '#ffb7c5e6',
  borderRadius: '6px',
  position: 'absolute',
  left: '0.5rem',
  top: '0.5rem',
  zIndex: 0
}
