import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types'

const ToastMessage = ({notify,message}) => {

    useEffect(() => {
        notify()
    },[])

  return (
    <div>
        {/* <button>{message}</button> */}
        <ToastContainer />
    </div>
  )
}

export default ToastMessage

ToastMessage.propTypes = {
    notify: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
}