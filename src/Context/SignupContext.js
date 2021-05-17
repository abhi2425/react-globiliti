import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const SignupContext = createContext()

export const SignupContextProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    return window.removeEventListener('resize', () => {})
  }, [])

  const signUpOrLogin = async (url, formData) => {
    try {
      setLoading(true)
      const { data } = await axios({
        method: 'POST',
        url: `https://globiliti-test-api.herokuapp.com/${url}`,
        data: formData,
      })
      if (data) {
        setLoading(false)
        const message = url.includes('/login')
          ? `Hey ${data.user?.firstname} Welcome Back!`
          : `Thanks ${data.user?.firstname} for joining us!`
        setAlert({ show: true, type: 'success', message })
        setTimeout(() => setAlert({ ...alert, show: false }), 3500)
        setUser(data.user)
        localStorage.setItem('token', data.token)
        return data
      }
    } catch (error) {
      setLoading(false)
      const message = url.includes('/login')
        ? `Wrong credentials please try again!!`
        : `Something went wrong. Please try again!!`
      setAlert({ show: true, type: 'danger', message })
      setTimeout(() => setAlert({ ...alert, show: false }), 3500)
    }
  }
  const logOutHandler = () => {
    localStorage.removeItem('token')
  }

  return (
    <SignupContext.Provider
      value={{
        screenWidth,
        loading,
        alert,
        setAlert,
        setScreenWidth,
        signUpOrLogin,
        logOutHandler,
      }}
    >
      {children}
    </SignupContext.Provider>
  )
}

export const useSignupContext = () => useContext(SignupContext)
