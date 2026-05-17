import { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'

function formatValue(value, fallback) {
  return value?.trim() ? value : fallback
}

function UserProfile() {
  const { currentUser, activeTestCase } = useContext(UserContext)

  return (
    <section className="profile-card">
      <div className="profile-header">
        <div>
          <h2>User profile information</h2>
          <p>The fields below read shared user data directly from the context.</p>
        </div>
        <div className="badge-row">
          <span className={`type-badge ${activeTestCase.type.toLowerCase()}`}>
            {activeTestCase.type} Test
          </span>
          <span className="state-badge">Active</span>
        </div>
      </div>

      <div className="profile-grid">
        <div className="field-grid">
          <article className="field-card">
            <p className="field-label">Name</p>
            <p className="field-value">{formatValue(currentUser.name, 'Name not provided')}</p>
            <p className="field-help">Fallback appears automatically if the name is missing.</p>
          </article>

          <article className="field-card">
            <p className="field-label">Email</p>
            <p className="field-value">{formatValue(currentUser.email, 'Email not provided')}</p>
            <p className="field-help">Long email values wrap to keep the layout stable.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
