import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserstore } from '../store/useUserStore'

const Logout = () => {
    const navigate = useNavigate()
    const clearSession = useUserstore((state) => state.clearSession)
    useEffect(() => {
        navigate('/')
        clearSession()
    }, [])
    return <></>
}

export default Logout
