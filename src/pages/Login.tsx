import { useEffect } from 'react'

const APP_URL = 'https://onsite-modules.onrender.com'

export default function Login() {
  useEffect(() => {
    window.location.replace(`${APP_URL}/login`)
  }, [])

  return null
}
