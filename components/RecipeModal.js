import { useEffect } from 'preact/hooks';
import useStoreon from 'storeon/preact';
import cxs from 'cxs'
import cs from 'classnames';
import { useDataApi, getRecipeUrl } from '../utils/helpers';
import Ingredients from './Ingredients';
import Placeholder from './Placeholder';
import PortionIcon from '../images/portion.svg';
import ClockIcon from '../images/clock.svg';
import EmptyLikeIcon from '../images/like-empty.svg';
import CalendarIcon from '../images/calendar.svg';
import CancelIcon from '../images/cancel.svg';


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
        e.target.src = '../assets/no-photo.svg'
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
            class={cs(cxs(style.main), { active: isRecipeModalOpen })}
        >

            <div onClick={e => e.stopPropagation()} class={cxs(style.modal)}>
                <div class={cxs(style.cancel)}>
                    <CancelIcon onClick={() => dispatch('closeRecipeModal')} />
                </div>
                <div class={cxs(style.image)}>
                    <img onError={handleImageError} class={cs({ loading: isLoading })} src={imageSrc} alt={title} loading="lazy" />
                    <div class={cxs(style.label)}>
                        <h2 class={cxs(style.title)}>{title}</h2>
                        <div class={cxs(style.actions)}>
                            <div class={cxs(style.plan)}>
                                <CalendarIcon />
                            </div>
                            <div class={cxs(style.like)}>
                                <EmptyLikeIcon />
                            </div>

                        </div>
                    </div>
                </div>
                <div class={cxs(style.content)} >

                    <div class={cxs(style.info)}>
                        <div class={cxs(style.meta)}>
                            <div>
                                <PortionIcon />
                                <div>{portions}</div>
                            </div>
                            {time ?
                                <div>
                                    <ClockIcon />
                                    <div>{time}</div>
                                </div>
                                : null}
                        </div>
                        <Ingredients
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
                        <div class={cxs(style.steps)}>
                            {data.steps.map((step, i) => (
                                <p class={cxs(style.step)} key={i}>
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
    main: {
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
        '@media (max-width: 900px)': {
            padding: '0'
        }
    },

    modal: {
        position: 'relative',
        width: '70vw',
        maxWidth: '55rem',
        margin: '0 auto',
        backgroundColor: '#fff',
        overflow: 'hidden',
        '@media (max-width: 900px)': {
            width: '100vw',
            margin: '0'
        },
    },

    cancel: {
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
        ':hover': {
            width: '1.2rem',
            height: '1.2rem',
        }
    },

    image: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        ' > img': {
            height: '31.5rem',
            width: '100%',
            objectFit: 'cover',
            willChange: 'filter',
            transition: 'filter .3s',
            'loading': {
                filter: 'blur(5px)'
            }
        }
    },

    label: {
        position: 'absolute',
        left: "0",
        right: "0",
        bottom: "0em",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "3rem 2.5rem",
        backgroundColor: "rgba(0,0,0,0.4)",
        '@media (max-width: 600px)': {
            justifyContent: 'center',
            padding: "1.5rem 1rem"
        }
    },
    title: {
        margin: '0 0 1rem 0',
        color: 'aliceblue',
        '@media (max-width: 600px)': {
            marginBottom: '1.5rem'
        },
    },
    actions: {
        display: 'flex',
        ' > *': {
            cursor: 'pointer',
            borderRadius: '50%',
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            transition: 'all .2s',
            width: '2rem',
            height: '2rem',
        },
        '@media (max-width: 600px)': {
            ' svg': {
                width: '2rem',
                height: '1.7rem',
            },
            ' > *': {
                padding: '.9rem',
            },
        }
    },


    like: {
        fill: '#a5001d',
        marginLeft: '2rem',
        ':hover': {
            fill: 'aliceblue',
            backgroundColor: '#a5001d'
        },
    },
    plan: {
        fill: '#333',
        ':hover': {
            fill: 'aliceblue',
            backgroundColor: '#333'
        },
    },

    content: {
        padding: '0 7rem 2.5rem 7rem',
        '@media (max-width: 600px)': {
            padding: '0 3rem 2.5rem 3rem'
        },
    },

    info: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '4rem',
        ' > *': {
            flex: '1'
        }
    },

    meta: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '4rem',
        ' svg': {
            width: '3rem',
            height: '3rem',
            marginBottom: '.5rem'
        },
        ' > *': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },


    steps: {
        marginTop: '4rem',
        fontSize: '1.1rem',
        textAlign: 'justify',
    },
    step: {
        marginBottom: '3rem'
    },
};

export default RecipeModal;
