import { useState, type FormEvent } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'

const DEMO_EMAIL = 'test@test.cz'
const DEMO_PASSWORD = 'Heslo123'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setErrorMessage('Zadali jste chybný e-mail nebo heslo.')
      return
    }

    setErrorMessage('')
    setIsLoggedIn(true)
    navigate('/dashboard')
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
    setErrorMessage('')
    navigate('/login')
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <main>
            <h1>Přihlášení</h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
title="E-mail musí mít formát uzivatel@domena.cz a nesmí obsahovat mezery."
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label htmlFor="password">Heslo</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={8}
                maxLength={20}
                required
              />

              {errorMessage && <p role="alert">{errorMessage}</p>}

              <button type="submit">Přihlásit se</button>
            </form>
          </main>
        }
      />

      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <main>
              <h1>Vítejte</h1>

              <button type="button" onClick={handleLogout}>
                Odhlásit se
              </button>
            </main>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App