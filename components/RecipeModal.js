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
import EmptyLikeIcon from '../images/like-empty.svg';
import CalendarIcon from '../images/calendar.svg';

const ps = picostyle(h);

const RecipeModal = props => {
    const { dispatch, clickedRecipe, isRecipeModalOpen } = useStoreon(
        'clickedRecipe',
        'isRecipeModalOpen'
    );


    const {
        title,
        image,
        ingredients,
        ingredientsAmount,
        portions,
        time,
        pageUrl
    } = clickedRecipe;

    const { data, isLoading, isError, doFetch } = useDataApi(pageUrl, {
        image: '',
        steps: []
    });

    useEffect(() => {
        document.body.style.overflow = isRecipeModalOpen ? 'hidden' : 'auto';
    }, [isRecipeModalOpen]);

    useEffect(() => {
        if (pageUrl) {
            doFetch(getRecipeUrl(pageUrl));
        }
    }, [pageUrl]);


    const imageSrc = isLoading ? image : data.image ? data.image : image;

    const loaderContent = (
        <div>
            <p>Ищу рецепт блюда</p>
            <p>{title}</p>
        </div>
    );

    return (
        <div
            onClick={() => dispatch('closeRecipeModal')}
            class={cs(props.class, { active: isRecipeModalOpen })}
        >
            <div onClick={e => e.stopPropagation()} class="modal">
                <div class='image'>
                    <img class={cs({ loading: isLoading })} src={imageSrc} alt={title} loading="lazy" />
                    <div class="label">
                        <h2 class="title">{title}</h2>
                        <div class="actions">
                            <CalendarIcon class="plan" />
                            <EmptyLikeIcon class="like" />
                        </div>
                    </div>
                </div>
                <div class="content">

                    <div class="info">
                        <Ingredients
                            ingredients={ingredients}
                            amount={ingredientsAmount}
                            isDefaultOpen
                        />
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
                            {data.steps.map((step, i) => (
                                <p class="step" key={i}>
                                    <span style={{ fontWeight: 'bold', marginRight: '1rem' }}>
                                        {step[0] + step[1]}
                                    </span>
                                    {step.slice(2)}
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
    },

    ' .image': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    ' .image > img': {
        height: '31.5rem',
        width: '100%',
        objectFit: 'cover',
        willChange: 'filter',
        transition: 'filter .3s'
    },

    ' img.loading': {
        filter: 'blur(5px)'
    },

    ' .label': {
        position: 'absolute',
        left: "0",
        right: "0",
        bottom: "0em",
        display: 'flex',
        justifyContent: 'space-between',
        padding: "3rem 2.5rem",
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    ' .title': {
        margin: '0',
        color: 'aliceblue'
    },
    ' .actions': {
        display: 'flex'
    },
    ' .actions svg': {
        width: '2.5rem',
        height: '2.5rem',
        cursor: 'pointer'
    },
    ' .actions svg:hover': {
    },

    ' .like': {
        fill: '#a5001d',
        marginLeft: '2rem'
    },
    ' .plan': {
        fill: 'aliceblue'
    },

    ' .content': {
        padding: '2.5rem'
    },

    ' .info': {
        display: 'flex',
        marginTop: '2rem'
    },
    ' .info > *': {
        flex: '1'
    },

    ' .meta': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    ' .meta svg': {
        maxWidth: '3rem',
        maxHeight: '3rem',
        marginBottom: '.5rem'
    },
    ' .meta > *': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    ' .steps': {
        marginTop: '4rem',
        fontSize: '1.1rem',
        textAlign: 'justify',
        paddingRight: '8rem'
    },
    ' .step': {
        marginBottom: '3rem'
    }
};

export default ps(RecipeModal)(style);
