import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { useSession } from 'next-auth/client';
import { SignInButton } from '.'

jest.mock('next-auth/client')

describe('SignInButton component', () => {

  it('renders corrctly when the user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    const { getByText, debug } = render(
      <SignInButton />
    )

    //debug()
    expect(getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('renders corrctly when the user is authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([
      { user: { name: 'John Doe', email: 'john.doe@gmail.com' }, expires: 'fake-expies' }
      , false
    ])

    const { getByText, debug } = render(
      <SignInButton />
    )

    //debug()
    expect(getByText('John Doe')).toBeInTheDocument()
  })
}) 