import { h } from 'preact';
import { useState } from 'preact/hooks';
import cs from 'classnames';
import { injectStyle } from '../utils/injectStyle';

const Input = props => {
  const { onChange, placeholder, icon, classes } = props;
  const [focus, setFocus] = useState(false);
  return (
    <div class={cs(classes.main, { focus })}>
      <input
        class={classes.input}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {icon}
    </div>
  );
};

const style = ({ colors: { back, text, border } }) => ({
  main: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    border: `1px solid ${border.primary}`,
    borderRadius: '.28571429rem',
    padding: '0.5rem 1rem',
    '.focus': {
      borderColor: border.interactive
    }
  },

  input: {
    color: text.primary,
    backgroundColor: back.primary,
    fontSize: '.9rem',
    border: 'none',
    outline: 'none',
    '::placeholder': {
      color: text.secondary
    },
    ':focus + svg': {
      fill: text.primary
    },
    '+ svg': {
      cursor: 'pointer',
      width: '1rem',
      height: '1rem',
      fill: text.secondary
    },
    '+ svg:hover': {
      transform: 'scale(1.2)',
      transition: 'all .3s',
      fill: text.primary
    }
  }
});

export default injectStyle(style)(Input);
