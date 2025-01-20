import PropTypes from 'prop-types';

export const FirstApp = ({ title , subtitle }) => {  

  // console.log( props );

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p> 
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'data'
}