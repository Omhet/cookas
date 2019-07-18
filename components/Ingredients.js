import { h } from 'preact';
import cxs from 'cxs'
import cs from 'classnames';

const Ingredients = props => {
  const { amount, ingredients, isDefaultOpen, className} = props;
  return (
    <details open={isDefaultOpen} class={cs(className)}>
      <summary class={cxs(style.summary)}>{amount}</summary>
      <div>
        {ingredients && ingredients.map(({ name, amount }) => (
          <div class={cxs(style.row)} key={name}>
            <span class={cxs(style.name)}>{name}</span>
            <span class={cxs(style.amount)}>{amount}</span>
          </div>
        ))}
      </div>
    </details>
  );
};

const style = {
  summary: {
    outline: 'none',
    cursor: 'pointer',
    marginBottom: '1rem'
  },
  row: {
    color: 'rgba(0,0,0,.68)',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '.5rem'
  },
  name: {
    fontWeight: 'bold'
  },
  amount: {
    textAlign: 'right'
  }
};

export default Ingredients;
