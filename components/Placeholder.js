import cxs from 'cxs'
import Loader from './Loader';

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
    <div class={cxs(style.main)}>
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

export default Placeholder;
