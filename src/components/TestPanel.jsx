import { useContext } from 'react'
import { UserContext } from '../UserContext.jsx'

function TestButton({ testCase, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`test-button ${isActive ? 'active' : ''}`.trim()}
      onClick={() => onSelect(testCase.id)}
    >
      <div className="test-button-head">
        <div>
          <p className="test-button-title">{testCase.label}</p>
          <p className="test-button-subtitle">{testCase.type} test case</p>
        </div>
        <span className={`type-badge ${testCase.type.toLowerCase()}`}>{testCase.type}</span>
      </div>
      <p className="test-summary">{testCase.expectation}</p>
    </button>
  )
}

function TestPanel() {
  const { testCases, activeTestId, activeTestCase, statusMessage, runTestCase } =
    useContext(UserContext)

  const normalTests = testCases.filter((testCase) => testCase.type === 'Normal')
  const edgeTests = testCases.filter((testCase) => testCase.type === 'Edge')

  return (
    <>
      <section className="test-panel">
        <div className="test-panel-header">
          <div>
            <h2>Switch between test cases</h2>
            <p>Pick a test case to update the shared user profile.</p>
          </div>
        </div>

        <div className="test-groups">
          <div className="test-group">
            <div className="test-group-title">
              <h3>Normal Test Cases</h3>
              <p className="group-count">3 cases</p>
            </div>
            <div className="test-button-list">
              {normalTests.map((testCase) => (
                <TestButton
                  key={testCase.id}
                  testCase={testCase}
                  isActive={activeTestId === testCase.id}
                  onSelect={runTestCase}
                />
              ))}
            </div>
          </div>

          <div className="test-group">
            <div className="test-group-title">
              <h3>Edge Test Cases</h3>
              <p className="group-count">3 cases</p>
            </div>
            <div className="test-button-list">
              {edgeTests.map((testCase) => (
                <TestButton
                  key={testCase.id}
                  testCase={testCase}
                  isActive={activeTestId === testCase.id}
                  onSelect={runTestCase}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="status-card">
        <div className="status-header">
          <div>
            <h2>Current Test Status</h2>
            <p>Quick proof that the selected case loaded correctly.</p>
          </div>
          <span className="result-badge pass">Passed</span>
        </div>

        <div className="status-layout">
          <div className="status-banner">
            <p>
              <strong>Status:</strong> {statusMessage}
            </p>
          </div>

          <div className="status-grid">
            <article className="status-item">
              <h3>Current Test</h3>
              <p>{activeTestCase.label}</p>
              <p className="status-note">{activeTestCase.type} test is active.</p>
            </article>

            <article className="status-item">
              <h3>What To Check</h3>
              <p>Pass</p>
              <p className="status-note">{activeTestCase.expectation}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestPanel
