export default ({ colors: { text, back, overlay } }) => ({
    main: {
        display: 'none',
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        padding: '2rem',
        backgroundColor: overlay.primary,
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
        backgroundColor: back.primary,
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
        fill: overlay.secondary,
        transition: 'all .3s',
        borderRadius: '50%',
        padding: '1.4rem',
        backgroundColor: overlay.invertedPrimary,
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
        backgroundColor: overlay.secondary,
        '@media (max-width: 600px)': {
            justifyContent: 'center',
            padding: "1.5rem 1rem"
        }
    },
    title: {
        margin: '0 0 1rem 0',
        color: text.invertedPrimary,
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
            backgroundColor: overlay.invertedPrimary,
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
            fill: text.invertedPrimary,
            backgroundColor: '#a5001d'
        },
    },
    plan: {
        fill: '#333',
        ':hover': {
            fill: text.invertedPrimary,
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
            marginBottom: '.5rem',
            fill: text.primary
        },
        ' > *': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: text.secondary
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
});