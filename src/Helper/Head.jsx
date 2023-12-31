import React from 'react'
import PropTypes from 'prop-types';

const Head = (props) => {

    React.useEffect(() => {
        document.title = props.title + " | VerifyMyAge"
        document.querySelector("meta[name='description']")
        .setAttribute('content', props.description || '')
    }, [props])

  return (
    <></>
  )
}

Head.propTypes = {
    description: PropTypes.any,
    title: PropTypes.any,
  };

export default Head