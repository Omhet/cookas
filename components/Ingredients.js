import { h } from 'preact';
import picostyle from 'picostyle';

const ps = picostyle(h);

const Ingredients = props => {
  const { amount, ingredients } = props;
  return (
    <details class={props.class}>
      <summary>{amount}</summary>
      <div>
        {ingredients.map(({ name, amount }) => (
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
