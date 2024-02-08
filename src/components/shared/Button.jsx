import PropTypes from 'prop-types'


function Button({ children, version, type, isDisabled }) {//children would be the text around which the buton conmponent is wrap around
  return (
    <Button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </Button>
  )
}


Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}


export default Button
