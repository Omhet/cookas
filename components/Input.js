import { useState } from 'preact/hooks';
import cs from 'classnames';
import cxs from 'cxs'

const Input = props => {
  const { onChange, placeholder, icon } = props;
  const [focus, setFocus] = useState(false);
  return (
    <div class={cs(cxs(style.main), { focus })}>
      <input
        class={cxs(style.input)}
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

const style = {
  main: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '.28571429rem',
    padding: '0.5rem 1rem',
    '.focus': {
      borderColor: '#85b7d9'
    }
  },
  
  input: {
    color: 'rgba(0,0,0,.87)',
    fontSize: '.9rem',
    border: 'none',
    outline: 'none',
    ':focus': {
      borderColor: '#85b7d9'
    },
    ':focus + svg': {
      fill: '#444'
    },
    '+ svg': {
      cursor: 'pointer',
      width: '1rem',
      height: '1rem',
      fill: '#888'
    },
    '+ svg:hover': {
      transform: 'scale(1.2)',
      transition: 'all .3s',
      fill: "#444"
    },
  },
  
};

export default Input;
