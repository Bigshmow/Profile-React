import style from './style';

const s = Object.create(style);

const mq = window.matchMedia('(max-width:450px)');

// Brand Colors
// #209CEE - main big blue
// #09121D - 1st text
// #0E476E - secondary deep blue
// #11BBD6 - hover
// #ED981F - button/accent
// #A15F00 - tertiary/accent
// #F2FEFF - Background && 2nd text

const handleMedia = (mq) => {

  if (mq.matches){ 
    
    // mobile rules

    s.slide = {
      position: 'static',
      background: '#F2FEFF',
      color: '#09121D',
      fontFamily: 'Gill Sans, sans-serif',
      fontSize: '16px',
      fontWeight: '300',
      zIndex: '0',
      marginLeft: '0px'
    }
    s.sidebar = {
      zIndex: '-1'
    }
    s.topnav = {
      zIndex: '0',
      position: 'sticky',
      marginLeft: '0px'
    }
  } else {

    // desktop rules

    s.slide = {
      position: 'static',
      background: '#F2FEFF',
      color: '#09121D',
      fontFamily: 'Gill Sans, sans-serif',
      fontSize: '16px',
      fontWeight: '300',
      zIndex: '0',
      marginLeft: '80px',
    };
      
      s.sidebar = {
        position: 'fixed',
        height: '100%',
        width: '80px',
        top: '0',
        left: '0',
        background: '#F2FEFF',
        overflowX: 'hidden', /* Disable horizontal scroll */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: '2'
      };
      
      s.topnav = {
        position: 'sticky',
        top: '0',
        background: '#F2FEFF',
        marginLeft: '-7px',
        zIndex: '5'
      }
  }
}

handleMedia(mq);

export default s;
