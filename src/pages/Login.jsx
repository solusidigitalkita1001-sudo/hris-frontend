import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
        console.log('Login:', { email, password })
        navigate('/dashboard')
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="card shadow" style={{ width: '400px' }}>
            <div className="card-body p-4">
            <div className="text-center mb-4">
                <h3 className="fw-bold">HRIS System</h3>
                <p className="text-muted">Sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>

                <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Sign In
                </button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Login