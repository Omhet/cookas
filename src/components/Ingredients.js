import { h } from 'preact';
import cs from 'classnames';
import { injectStyle } from '../utils/injectStyle';

const Ingredients = props => {
  const { amount, ingredients, isDefaultOpen, className, classes } = props;
  return (
    <details open={isDefaultOpen} class={cs(className)}>
      <summary class={classes.summary}>{amount}</summary>
      <div>
        {ingredients && ingredients.map(({ name, amount }) => (
          <div class={classes.row} key={name}>
            <span class={classes.name}>{name}</span>
            <span class={classes.amount}>{amount}</span>
          </div>
        ))}
      </div>
    </details>
  );
};

const style = ({ colors: { text } }) => ({
  summary: {
    outline: 'none',
    cursor: 'pointer',
    marginBottom: '1rem',
    color: text.primary
  },
  row: {
    color: 'rgba(0,0,0,.68)',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '.5rem',
    color: text.primary
  },
  name: {
    fontWeight: 'bold'
  },
  amount: {
    textAlign: 'right'
  }
});

export default injectStyle(style)(Ingredients);
