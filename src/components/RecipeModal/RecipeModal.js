import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import useStoreon from 'storeon/preact';
import cs from 'classnames';
import style from './style';
import { useDataApi, getRecipeUrl } from '../../utils/helpers';
import { injectStyle } from '../../utils/injectStyle';
import Ingredients from '../Ingredients';
import Placeholder from '../Placeholder';
import PortionIcon from '../../images/portion.svg';
import ClockIcon from '../../images/clock.svg';
import EmptyLikeIcon from '../../images/like-empty.svg';
import CalendarIcon from '../../images/calendar.svg';
import CancelIcon from '../../images/cancel.svg';


const RecipeModal = props => {
    const { classes } = props;

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
        e.target.src = '../../cookas/assets/no-photo.svg'
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
            class={cs(classes.main, { active: isRecipeModalOpen })}
        >

            <div onClick={e => e.stopPropagation()} class={classes.modal}>
                <div class={classes.cancel}>
                    <CancelIcon onClick={() => dispatch('closeRecipeModal')} />
                </div>
                <div class={classes.image}>
                    <img onError={handleImageError} class={cs({ loading: isLoading })} src={imageSrc} alt={title} loading="lazy" />
                    <div class={classes.label}>
                        <h2 class={classes.title}>{title}</h2>
                        <div class={classes.actions}>
                            <div class={classes.plan}>
                                <CalendarIcon />
                            </div>
                            <div class={classes.like}>
                                <EmptyLikeIcon />
                            </div>

                        </div>
                    </div>
                </div>
                <div class={classes.content} >

                    <div class={classes.info}>
                        <div class={classes.meta}>
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
                        <div class={classes.steps}>
                            {data.steps.map((step, i) => (
                                <p class={classes.step} key={i}>
                                    <span style={{fontWeight: 'bold', marginRight: '1rem' }}>
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

export default injectStyle(style)(RecipeModal);
