import { h } from 'preact';
import { injectStyle } from '../utils/injectStyle';
import Loader from './Loader';

const Placeholder = props => {
  const {
    isError,
    isLoading,
    isText = false,
    loaderContent = 'Загружаю',
    children,
    classes
  } = props;

  const loader = isText ? (
    <Loader>{loaderContent}</Loader>
  ) : (
      <Loader>{loaderContent}</Loader>
    );

  return (
    <div class={classes.main}>
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
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default injectStyle(style)(Placeholder);
