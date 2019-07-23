import { h } from 'preact';
import cs from 'classnames';
import { injectStyle } from '../utils/injectStyle';

const Loader = props => {
  const { classes } = props;

  return (
    <div class={classes.main}>
      <div class={cs(classes.loader, 'loader')}></div>
      {props.children}
    </div>
  );
};

const style = ({ colors: { accent } }) => ({
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
    borderTopColor: accent.primary,
    borderBottomColor: accent.primary,
    borderRadius: "50%",

    ':before': {
      content: "''",
      display: "block",
      margin: "auto",
      width: "0.75em",
      height: "0.75em",
      border: `3px solid ${accent.primary}`,
      borderRadius: "50%",
    }
  }
});

export default injectStyle(style)(Loader);
