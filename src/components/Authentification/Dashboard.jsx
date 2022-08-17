import { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import Form from './Form'
import Login from './Login'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{user ? <Form /> : <Login />}</div>
}

export default Dashboard
