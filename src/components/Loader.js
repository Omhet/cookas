import { h } from 'preact';
import { injectStyle } from '../utils/injectStyle';

const Loader = props => {
  const { classes } = props;

  return (
    <div class={classes.main}>
      <div class={classes.loader}></div>
      {props.children}
    </div>
  );
};

const loaderColor = '#222';

const style = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '1.7rem',
    marginTop: '10rem',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
      marginTop: '5rem'
    }
  },

  loader: {
    marginBottom: '3rem',
    display: "flex",
    width: "3.5em",
    height: "3.5em",
    border: "3px solid transparent",
    borderTopColor: loaderColor,
    borderBottomColor: loaderColor,
    borderRadius: "50%",
    animation: "spin 1.5s linear infinite",

    ':before': {
      content: "''",
      display: "block",
      margin: "auto",
      width: "0.75em",
      height: "0.75em",
      border: `3px solid ${loaderColor}`,
      borderRadius: "50%",
      animation: "pulse 1s alternate ease-in-out infinite"
    },

    

    
  },

  spin: {
    
  }
};

export default injectStyle(style)(Loader);
