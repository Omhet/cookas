import { h } from 'preact';
import useStoreon from 'storeon/preact';
import picostyle from 'picostyle';

const ps = picostyle(h);

function CardComponent(props) {
  const { image, imageAlt, header } = props;
  const { dispatch, count } = useStoreon('count');

  return (
    <div class={props.class} >
      <img class="image" src={image} alt={imageAlt} />
      <div class="content">
        <h3 class="header">{header}</h3>
        <div class="meta"></div>
      </div>
    </div>
  ); 
}

export default ps(CardComponent)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  cursor: 'pointer',
  width: '20rem',
  height: '20rem',
  boxShadow: '0 0 2px 2px #ddd'
});
