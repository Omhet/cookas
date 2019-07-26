import { h } from 'preact';
import useStoreon from 'storeon/preact';
import { injectStyle } from '../utils/injectStyle';
import { WithStyles } from '../types/Style';

interface OwnProps {
}

type Props = OwnProps & WithStyles<typeof style>;

const Temp = ({ classes }: Props)  => {

  const { dispatch, temp } = useStoreon('temp');


  return (
    <div class={classes.main}>
    </div>
  );
};

const style = ({ colors: { text } }) => ({
  main: {

  },
});

export default injectStyle(style)(Temp);
