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
import CancelIcon from '../images/cancel.svg';

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

    const handleImageError = (e) => {
        e.target.src = '../images/no-photo.svg'
    };


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
                <div class="cancel">
                    <CancelIcon onClick={() => dispatch('closeRecipeModal')} />
                </div>
                <div class='image'>
                    <img onError={handleImageError} class={cs({ loading: isLoading })} src={imageSrc} alt={title} loading="lazy" />
                    <div class="label">
                        <h2 class="title">{title}</h2>
                        <div class="actions">
                            <div class="plan">
                                <CalendarIcon />
                            </div>
                            <div class="like">
                                <EmptyLikeIcon />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="content">

                    <div class="info">
                        <div class="meta">
                            <div class="portion">
                                <PortionIcon />
                                <div>{portions}</div>
                            </div>
                            {time ?
                                <div class="clock">
                                    <ClockIcon />
                                    <div>{time}</div>
                                </div>
                                : null}
                        </div>
                        <Ingredients
                            className="ingredients"
                            ingredients={ingredients}
                            amount={ingredientsAmount}
                            isDefaultOpen
                        />

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
        position: 'relative',
        width: '70vw',
        maxWidth: '55rem',
        margin: '0 auto',
        backgroundColor: '#fff',
        overflow: 'hidden'
    },

    ' .cancel': {
        cursor: 'pointer',
        position: 'absolute',
        zIndex: '1',
        top: '-.7rem',
        right: '-.7rem',
        width: '1rem',
        height: '1rem',
        fill: 'rgba(0,0,0,0.5)',
        transition: 'all .3s',
        borderRadius: '50%',
        padding: '1.4rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    ' .cancel > svg': {
        width: '100%',
        height: '100%',
    },

    ' .cancel:hover': {
        width: '1.2rem',
        height: '1.2rem',
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
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "3rem 2.5rem",
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    ' .title': {
        margin: '0 0 1rem 0',
        color: 'aliceblue'
    },
    ' .actions': {
        display: 'flex',
    },
    ' .actions > *': {
        cursor: 'pointer',
        borderRadius: '50%',
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        transition: 'all .2s'
    },
    ' .actions svg': {
        width: '2rem',
        height: '2rem',
    },

    ' .like': {
        fill: '#a5001d',
        marginLeft: '2rem'
    },
    ' .plan': {
        fill: '#333'
    },
    ' .like:hover': {
        fill: 'aliceblue',
        backgroundColor: '#a5001d'
    },
    ' .plan:hover': {
        fill: 'aliceblue',
        backgroundColor: '#333'
    },

    ' .content': {
        padding: '0 7rem 2.5rem 7rem'
    },

    ' .info': {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '4rem'
    },
    ' .info > *': {
        flex: '1'
    },


    ' .meta': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '4rem'
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
    },
    ' .step': {
        marginBottom: '3rem'
    },

    '@media (max-width: 900px)': {
        padding: '0',
        ' .modal': {
            width: '100vw !important',
            margin: '0 !important'
        }
    },

    '@media (max-width: 600px)': {
        ' .modal .content': {
            padding: '0 3rem 2.5rem 3rem !important'
        },
        ' .actions': {

        },
        ' .actions svg': {
            width: '2rem !important',
            height: '1.7rem !important',
        },
        ' .actions > *': {
            padding: '.9rem !important',
        },
        ' .title': {
            marginBottom: '1.5rem !important'
        },
        ' .label': {
            justifyContent: 'center !important',
            padding: "1.5rem 1rem !important"
        }
    }
};

export default ps(RecipeModal)(style);
