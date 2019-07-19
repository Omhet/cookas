import { h } from 'preact';
import cxs from 'cxs'

export const injectStyle = (style) => (View) => {
    const classes = {};

    for (const className in style) {
        classes[className] = cxs(style[className]);
    }

    return (props) => <View {...props} classes={classes} />
}