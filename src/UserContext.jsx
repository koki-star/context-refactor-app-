/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'

export const UserContext = createContext(null)

const testCases = [
  {
    id: 'normal-1',
    label: 'Normal Test 1',
    type: 'Normal',
    user: {
      name: 'Kokob Haile',
      email: 'kokob@example.com',
      theme: 'Light',
    },
    expectation: 'Profile updates correctly, success message appears, and the button becomes active.',
    status: 'Normal Test 1 loaded successfully.',
  },
  {
    id: 'normal-2',
    label: 'Normal Test 2',
    type: 'Normal',
    user: {
      name: 'Maya Johnson',
      email: 'maya@example.com',
      theme: 'Dark',
    },
    expectation: 'Profile updates instantly and the dark preference displays correctly.',
    status: 'Normal Test 2 loaded successfully.',
  },
  {
    id: 'normal-3',
    label: 'Normal Test 3',
    type: 'Normal',
    user: {
      name: 'Alex Thompson',
      email: 'alex.thompson@studentmail.com',
      theme: 'System',
    },
    expectation: 'Longer email displays correctly and the layout stays clean.',
    status: 'Normal Test 3 loaded successfully.',
  },
  {
    id: 'edge-1',
    label: 'Edge Test 1',
    type: 'Edge',
    user: {
      name: '',
      email: 'noname@example.com',
      theme: 'Light',
    },
    expectation: 'The app should show the fallback value Name not provided.',
    status: 'Edge Test 1 loaded successfully. Name fallback handled successfully.',
  },
  {
    id: 'edge-2',
    label: 'Edge Test 2',
    type: 'Edge',
    user: {
      name: 'Sam Rivera',
      email: '',
      theme: 'Dark',
    },
    expectation: 'The app should show the fallback value Email not provided.',
    status: 'Edge Test 2 loaded successfully. Email fallback handled successfully.',
  },
  {
    id: 'edge-3',
    label: 'Edge Test 3',
    type: 'Edge',
    user: {
      name: 'VeryLongStudentNameForTestingDisplay',
      email: 'very.long.student.email.address@examplecollege.edu',
      theme: 'System',
    },
    expectation: 'Long content should wrap cleanly without breaking the card layout.',
    status: 'Edge Test 3 loaded successfully. Long text display handled successfully.',
  },
]

const defaultTest = testCases[0]

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(defaultTest.user)
  const [previousUser, setPreviousUser] = useState(defaultTest.user)
  const [activeTestId, setActiveTestId] = useState(defaultTest.id)
  const [statusMessage, setStatusMessage] = useState(defaultTest.status)

  const activeTestCase =
    testCases.find((testCase) => testCase.id === activeTestId) ?? defaultTest

  const runTestCase = (testId) => {
    const nextTestCase = testCases.find((testCase) => testCase.id === testId)

    if (!nextTestCase) {
      return
    }

    setPreviousUser(currentUser)
    setCurrentUser(nextTestCase.user)
    setActiveTestId(nextTestCase.id)
    setStatusMessage(nextTestCase.status)
  }

  return (
    <UserContext.Provider
      value={{
        testCases,
        currentUser,
        previousUser,
        activeTestId,
        activeTestCase,
        statusMessage,
        runTestCase,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
