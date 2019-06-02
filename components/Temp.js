import { h } from 'preact';
import useStoreon from 'storeon/preact';
import picostyle from 'picostyle';

const ps = picostyle(h);

const Temp = props => {

  const { dispatch, clickedRecipe } = useStoreon('clickedRecipe');


  return (
    <div class={props.class}>

    </div>
  );
};

const style = {

};

export default ps(Temp)(style);
