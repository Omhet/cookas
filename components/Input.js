import { h } from 'preact';
import { useState } from 'preact/hooks';
import cs from 'classnames';
import picostyle from 'picostyle';

const ps = picostyle(h);

const Input = props => {
  const { onChange, placeholder, icon } = props;
  const [focus, setFocus] = useState(false);
  return (
    <div class={cs(props.class, { focus })}>
      <input
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
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  border: '1px solid rgba(34,36,38,.15)',
  borderRadius: '.28571429rem',
  padding: '0.5rem 1rem',
  '.focus': {
    borderColor: '#85b7d9'
  },
  ' input': {
    color: 'rgba(0,0,0,.87)',
    fontSize: '.9rem',
    border: 'none',
    outline: 'none'
  },
  ' input:focus': {
    borderColor: '#85b7d9'
  },
  ' input:focus + svg': {
    fill: '#444'
  }
};

export default ps(Input)(style);
