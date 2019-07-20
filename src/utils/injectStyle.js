import { h } from 'preact';
import cxs from 'cxs';

export const injectStyle = style => View => {
  return (props, context = {}) => {
    const classes = {};
    const { theme = {} } = context;

    const finalStyle = typeof style === 'function' ? style(theme) : style;

    for (const className in finalStyle) {
      classes[className] = cxs(finalStyle[className]);
    }

    return <View {...props} classes={classes} />;
  };
};
