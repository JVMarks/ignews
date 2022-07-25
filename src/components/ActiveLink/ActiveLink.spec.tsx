import { render } from '@testing-library/react';
import { ActiveLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {

  it('Renders corrctly', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
  
  
    expect(getByText('Home')).toBeInTheDocument()
  })

  it('Is receiving activeclass', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
  
  
    expect(getByText('Home')).toHaveClass('active')
  })
}) 