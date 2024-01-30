import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'

const Home = () => {
    const user = useContext(AuthContext)
  return (
    <div>
        Hey Mr, {user && <span>{user.displayName}</span>}
    </div>
  )
}

export default Home