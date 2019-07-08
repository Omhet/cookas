import { h } from 'preact';
import picostyle from 'picostyle';
import cs from 'classnames';

const ps = picostyle(h);

const Ingredients = props => {
  const { amount, ingredients, isDefaultOpen, className} = props;
  return (
    <details open={isDefaultOpen} class={cs(className, props.class)}>
      <summary>{amount}</summary>
      <div>
        {ingredients && ingredients.map(({ name, amount }) => (
          <div class="row" key={name}>
            <span class="name">{name}</span>
            <span class="amount">{amount}</span>
          </div>
        ))}
      </div>
    </details>
  );
};

const style = {
  ' summary': {
    outline: 'none',
    cursor: 'pointer',
    marginBottom: '1rem'
  },
  ' .row': {
    color: 'rgba(0,0,0,.68)',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '.5rem'
  },
  ' .name': {
    fontWeight: 'bold'
  },
  ' .amount': {
    textAlign: 'right'
  }
};

export default ps(Ingredients)(style);
