import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { injectStyle } from '../utils/injectStyle';


const Temp = props => {
  const { classes } = props;

  const { dispatch, temp } = useStoreon('temp');


  return (
    <div class={classes.main}>

    </div>
  );
};

const style = {
  main: {

  },
};

export default injectStyle(style)(Temp);
