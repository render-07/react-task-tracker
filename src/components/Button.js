import PropTypes from 'prop-types'

const Button = ({kulay, text, onAdd}) => {
    return (
        <button 
        className = 'btn' 
        style = {{backgroundColor: kulay}}
        onClick = {onAdd}>
            {text}      
        </button>

    )
}

Button.defaultProps = {
    kulay: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
    kulay: PropTypes.string,
    onClick: PropTypes.func
}

export default Button