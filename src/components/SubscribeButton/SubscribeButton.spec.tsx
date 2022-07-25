import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/client';
import { SubscribeButton } from '.'

jest.mock('next-auth/client')
jest.mock('next/router');

describe('SubscribeButton component', () => {
  it('renders corrtly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SubscribeButton />
    )
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })


  it('renders user to sign in when not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    const signInMocked = mocked(signIn)

    const { debug } = render(
      <SubscribeButton />
    )

    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton)
    expect(signInMocked).toHaveBeenCalled()
    //debug()
  })

  it('renders to posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValue([
      {
        user:
        {
          name: 'John Doe',
          email: 'john.doe@gmail.com'
        }, 
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-expies'
      }
      , false
    ])

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<SubscribeButton />)

    const subcribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subcribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
}) 