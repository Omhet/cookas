import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import useStoreon from 'storeon/preact';
import picostyle from 'picostyle';
import cs from 'classnames';
import { useDataApi, getRecipeUrl } from '../utils/helpers';
import Ingredients from './Ingredients';
import Placeholder from './Placeholder';
import PortionIcon from '../images/portion.svg';
import ClockIcon from '../images/clock.svg';

const ps = picostyle(h);

const RecipeModal = props => {

    const { dispatch, clickedRecipe, isRecipeModalOpen } = useStoreon('clickedRecipe', 'isRecipeModalOpen');

    // console.log(clickedRecipe, isRecipeModalOpen);

    const { title, image, ingredients, ingredientsAmount, portions, time, pageUrl } = clickedRecipe;

    const { data, isLoading, isError, doFetch } = useDataApi(
        pageUrl,
        {
            image: '',
            steps: []
        }
    );

    useEffect(() => {
        document.body.style.overflow = isRecipeModalOpen ? 'hidden' : 'auto';
    }, [isRecipeModalOpen]);

    useEffect(() => {
        if (pageUrl) {
            doFetch(getRecipeUrl(pageUrl));
            console.log('FETCHING')
        }
    }, [pageUrl]);

    console.log(data);

    const imageSrc = isLoading
    ? image
    : data.image
    ? data.image
    : image;

    const loaderContent = (
        <div>
            <p>Ищу рецепт блюда</p>
            <p>{title}</p>
        </div>
    );

    return (
        <div onClick={() => dispatch('closeRecipeModal')} class={cs(props.class, { active: isRecipeModalOpen })}>
            <div onClick={(e) => e.stopPropagation()} class="modal">
                <h2 class="title">{title}</h2>
                <div class="content">
                    <div className={cs('image', { loading: isLoading })}>
                        <img src={imageSrc} alt={title} loading="lazy" />
                    </div>
                    <div class="info">
                        <Ingredients ingredients={ingredients} amount={ingredientsAmount} isDefaultOpen />
                        <div class="meta">
                            <div>
                                <PortionIcon />
                                <div>{portions}</div>
                            </div>
                            <div>
                                <ClockIcon />
                                <div>{time ? time : ''}</div>
                            </div>
                        </div>
                    </div>
                    <Placeholder
                        loaderContent={loaderContent}
                        isError={isError}
                        isLoading={isLoading}
                        isText
                    >
                        <div class="steps">
                            {data.steps.map((s, i) => (
                                <p class="step" key={i}>
                                    <span style={{ fontWeight: 'bold', marginRight: '1rem' }}>
                                        {s[0] + s[1]}
                                    </span>
                                    {s.slice(2)}
                                </p>
                            ))}
                        </div>
                    </Placeholder>
                </div>
            </div>
        </div>
    );
};

const style = {
    display: 'none',
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    padding: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    overflow: 'auto',


    '.active': {
        display: 'block'
    },

    ' .modal': {
        width: '900px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
    },

    ' .title': {
        margin: '0',
        borderBottom: '1px solid rgba(34,36,38,.15)',
        padding: '1.25rem 2.5rem'
    },

    ' .image': {
        filter: 'none',
        display: 'flex',
        justifyContent: 'center',
        willChange: 'filter',
        transition: 'filter .3s'
    },
    ' .image > img': {
        height: '31.5rem',
        width: '100%',
        objectFit: 'cover'
    },

    ' .image.loading': {
        filter: 'blur(5px)',
    },

    ' .content': {
        padding: '2.5rem'
    },

    ' .info': {
        display: 'flex',
        marginTop: '64px'
    },
    ' .info > *': {
        flex: '1'
    },

    ' .meta': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    ' .meta svg': {
        maxWidth: '4rem',
        maxHeight: '4rem',
        marginBottom: '.5rem'
    },
    ' .meta > *': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    ' .steps': {
        marginTop: '4rem',
        fontSize: '1.1rem',
        textAlign: 'justify',
        paddingRight: '8rem',

    },
    ' .step': {
        marginBottom: '3rem'
    },
    ' .stepNum': {
        // fontWeight: 'bold',
        // marginRight: '1rem'
    }

};

export default ps(RecipeModal)(style);
