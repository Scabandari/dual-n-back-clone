import React from 'react'
import PropTypes from 'prop-types'
import passScreenSize from './hoc/passScreenSize';

const DisplayScreenSize = props => {
    //console.log('props', props)
    return (
        <div>
            width: {props.width} height: {props.height}
        </div>
    )
}

DisplayScreenSize.propTypes = {

}

export default passScreenSize(DisplayScreenSize);
