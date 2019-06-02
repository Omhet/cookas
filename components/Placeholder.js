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
      {isError ? (
        <div>
          <p>Ой-вэй, что-то пошло не так</p>
          <p>Попробуйте снова</p>
        </div>
      ) : isLoading ? (
        loader
      ) : (
        children
      )}
    </div>
  );
};

const style = {};

export default ps(Placeholder)(style);
