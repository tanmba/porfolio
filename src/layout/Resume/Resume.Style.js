export const ResumeStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1200px',
  height: '90vh',
  margin: '0 auto',
  marginBottom: '10rem',
  position: 'relative',
  zIndex: 1,
  fontFamily: 'Taviraj, serif',
  textAlign: 'center'
}

export const ProjectStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridTemplateRows: '100%',
  gridColumnGap: '5vw',
  margin: '0 auto'
}

export const ProjectItemStyle = {
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: '5rem 17rem 4rem'
}

export const ProjectItemTitleStyle = {
  fontFamily: 'Taviraj, serif',
  fontStyle: 'italic',
  fontWeight: '100'
}

export const ProjectItemImgStyle = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  aspectRatio: '500/333'
}

export const ProjectItemImgInnerStyle = {
  backgroundPosition: '50% 45%',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%'
}

export const ProjectItemDescStyle = {
  marginTop: '2.5rem',
  lineHeight: '1.1'
}

export const ProjectItemLinkStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  textTransform: 'lowercase',
  width: '90%',
  padding: '1rem',
  color: '#000',
  border: '1px solid #a0988a',
  borderRadius: '2rem',
  textAlign: 'center',

  '&:hover': {
    background: '#000',
    borderColor: '#000',
    color: '#fff'
  }
}
