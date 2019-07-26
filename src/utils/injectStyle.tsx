import { h } from 'preact';
import cxs from 'cxs';
import { Theme } from '../types/Style';

type Context = { theme?: Theme };


// const makeCounter = <P>(
//   Component: React.ComponentType<P>
//     ) => {
      
// }

export const injectStyle = style => View => {
  return (props, context: Context = {}) => {
    const classes = {};
    const { theme } = context;

    const finalStyle = typeof style === 'function' ? style(theme) : style;

    for (const className in finalStyle) {
      classes[className] = cxs(finalStyle[className]);
    }

    return <View {...props} classes={classes} />;
  };
};
