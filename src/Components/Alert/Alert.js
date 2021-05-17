import React from 'react'
import { ImCross } from 'react-icons/im'
import { useSignupContext } from '../../Context/SignupContext'
import './Alert.css'

const Alert = () => {
  const { alert, setAlert } = useSignupContext()
  return (
    <section
      className={`${
        alert.show ? `show-alert ${alert?.type}` : ''
      } alert transition`}
    >
      <h1 className='alert-message'>{alert?.message}</h1>
      <i
        className='icon m-left-s'
        onClick={() => setAlert({ ...alert, show: false })}
      >
        <ImCross />
      </i>
    </section>
  )
}
export default Alert
