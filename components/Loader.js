import { h } from 'preact';
import picostyle from 'picostyle';

const ps = picostyle(h);

const Loader = props => {

  return (
    <div class={props.class}>
      <div class={'loader'}></div>
      {props.children}
    </div>
  );
};

const loaderColor = '#222';

const style = {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '2rem',
  marginTop: '10rem',

  ' .loader': {
    marginBottom: '3rem',
    display: "flex",
    width: "3.5em",
    height: "3.5em",
    border: "3px solid transparent",
    borderTopColor: loaderColor,
    borderBottomColor: loaderColor,
    borderRadius: "50%",
    animation: "spin 1.5s linear infinite",

  },
  ' .loader:before': {
    content: "''",
    display: "block",
    margin: "auto",
    width: "0.75em",
    height: "0.75em",
    border: `3px solid ${loaderColor}`,
    borderRadius: "50%",
    animation: "pulse 1s alternate ease-in-out infinite"
  },

  '@keyframes spin': {
    to: {
      transform: 'rotate(360deg)'
    }
  },

  '@keyframes pulse': {
    'from': {
      transform: 'scale(0.5)'
    },
    'to': {
      transform: 'scale(1)'
    }
  }

};



export default ps(Loader)(style);
