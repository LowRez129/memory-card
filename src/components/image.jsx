import PropTypes from 'prop-types';

export default function ImageGenerate ({request={}, onClick}) {
    const {object, pending} = request
    if (pending == true) {return <div>Loading...</div>}
    return (
        <div onClick={() => onClick(object.name)}>
            <img src={object.sprites.front_default} style={{background: 'white'}}/>
            <div>{object.name}</div>
        </div>
    );
}

ImageGenerate.propTypes = {
    request: PropTypes.exact({
        object: PropTypes.object,
        pending: PropTypes.bool
    }),
    onClick: PropTypes.func,
}