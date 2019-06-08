import { h } from 'preact';
import picostyle from 'picostyle';
import Loader from './Loader';

const ps = picostyle(h);

const Placeholder = props => {
  const {
    isError,
    isLoading,
    isText = false,
    loaderContent = 'Загружаю',
    children
  } = props;

  const loader = isText ? (
    <Loader>{loaderContent}</Loader>
  ) : (
    <Loader>{loaderContent}</Loader>
  );

  return (
    <div class={props.class}>
      {isLoading ? (
        loader
      ) : isError ? (
        <div>
          <p>Ой-вэй, что-то пошло не так</p>
          <p>Попробуйте снова</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default ps(Placeholder)(style);
