/*
.closeModal {
    height: 2rem;
    width: 2rem;
    background-image: linear-gradient(to right, var(--color-3), var(--color-2));
    border-radius: 50%;
    padding: .5rem;

    position: absolute;
    top: 3rem;
    right: 2rem;
    z-index: -2;

    display: flex;
    justify-content: center;
    align-items: center;
}

.closeModal span{
    display: block;
    height: 1.85rem;
    width: 1.85rem;
    background-color: var(--color-1);
    border-radius: 50%;
    padding: .5rem;
    

    position: absolute;
    z-index: -1;
}

*/
const stylesContainer = {
    height: '2rem',
    width: '2rem',
    backgroundImage: 'linearGradient(to right, #D434FE, #903AFF)',
    borderRadius:' 50%',
    padding: '.5rem',

    position: 'absolute',
    top: '3rem',
    right: '2rem',
    zIndex: '-2',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const style = {
    display: 'block',
    height: '1.85rem',
    width: '1.85rem',
    backgroundColor: '#150E28',
    borderRadius: '50%',
    padding: '.5rem',
    

    position: 'absolute',
    zIndex: '-1',
}


function CloseModalButton({ element }) {
    return (
        <div style={stylesContainer}>
            <span style={style}></span>
            <h3 style={{color: '#ffffff'}}>{element}</h3>
        </div>
    )
}

export default CloseModalButton
