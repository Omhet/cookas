import { h } from 'preact';
import picostyle from 'picostyle';

const ps = picostyle(h);

const Loader = props => {

  return (
    <div class={props.class}>
        {props.children}
    </div>
  );
};

const style = {

};

export default ps(Loader)(style);
