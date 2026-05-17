import { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'

function formatValue(value, fallback) {
  return value?.trim() ? value : fallback
}

function SnapshotCard({ title, user }) {
  return (
    <article className="snapshot-card">
      <h3>{title}</h3>
      <dl>
        <div>
          <dt>Name</dt>
          <dd>{formatValue(user.name, 'Name not provided')}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{formatValue(user.email, 'Email not provided')}</dd>
        </div>
        <div>
          <dt>Theme Preference</dt>
          <dd>{user.theme}</dd>
        </div>
      </dl>
    </article>
  )
}

function UserProfile() {
  const { currentUser, previousUser, activeTestCase } = useContext(UserContext)

  return (
    <>
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

            <article className="field-card">
              <p className="field-label">Theme Preference</p>
              <p className="field-value">{currentUser.theme}</p>
              <p className="field-help">Theme preference updates with each selected test case.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="panel-card">
        <div className="panel-header">
          <div>
            <h2>Profile change</h2>
            <p>Compare the previous values with the current result.</p>
          </div>
          <span className="result-badge pass">Pass</span>
        </div>

        <div className="snapshot-grid">
          <SnapshotCard title="Previous Profile State" user={previousUser} />
          <SnapshotCard title="Current Profile State" user={currentUser} />
        </div>
      </section>
    </>
  )
}

export default UserProfile
