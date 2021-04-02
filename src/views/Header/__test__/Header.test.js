import { render, screen } from '@testing-library/vue'
import Vuetify from 'vuetify'
import Header from '@/views/Header/Header'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

describe('Tests the Header view is rendered correctly', () => {
  it('Renders the Header and checks against a snapshot', async () => {
    const { asFragment } = await render(Header, options)
    expect(asFragment).toMatchSnapshot()
  })
  it('tests the nav bar button texts are present on the page', async () => {
    await render(Header, options)
    expect(screen.getByText('Designs')).toBeInTheDocument()
    expect(screen.getByText('Care')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
  })
})
