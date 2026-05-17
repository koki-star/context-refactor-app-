import { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'
import Sidebar from './Sidebar.jsx'
import UserProfile from './UserProfile.jsx'

function Dashboard() {
  const { activeTestCase, statusMessage } = useContext(UserContext)

  return (
    <main className="app-shell">
      <div className="app-frame">
        <section className="hero-card">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-topline">React Context Demo</p>
              <h1>Shared profile state without prop drilling</h1>
              <p>
                This project uses <span className="inline-code">createContext</span>,{' '}
                <span className="inline-code">UserProvider</span>, and{' '}
                <span className="inline-code">useContext</span> to share profile data across nested
                components without passing values through every layer.
              </p>
              <div className="hero-pills">
                <span className="pill">Current test: {activeTestCase.label}</span>
                <span className="pill">Test type: {activeTestCase.type}</span>
                <span className="pill">Result: Pass</span>
              </div>
            </div>

            <div className="hero-highlight">
              <p className="hero-topline">State Flow</p>
              <div className="code-stack">
                <span className="code-chip">UserProvider</span>
                <span className="flow-arrow">↓</span>
                <span className="code-chip">Dashboard</span>
                <span className="flow-arrow">↓</span>
                <span className="code-chip">Sidebar</span>
                <span className="flow-arrow">↓</span>
                <span className="code-chip">TestPanel uses useContext(UserContext)</span>
              </div>
              <p>{statusMessage}</p>
            </div>
          </div>
        </section>

        <section className="dashboard-grid">
          <UserProfile />
          <Sidebar />
        </section>
      </div>
    </main>
  )
}

export default Dashboard
