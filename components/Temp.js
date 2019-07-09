import useStoreon from 'storeon/preact';
import cxs from 'cxs'


const Temp = props => {

  const { dispatch, clickedRecipe } = useStoreon('clickedRecipe');


  return (
    <div class={cxs(style.main)}>

    </div>
  );
};

const style = {
  main: {

  },
};

export default Temp;
