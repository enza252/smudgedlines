import { render, screen } from '@testing-library/vue'
import Vuetify from 'vuetify'
import Header from '@/views/Header/Header'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

let fragment

beforeAll(async () => {
  const { asFragment } = await render(Header, options)
  fragment = asFragment
})
describe('Tests the Header view is rendered correctly', () => {
  it('Renders the Header and checks against a snapshot', () => {
    expect(fragment).toMatchSnapshot()
  })
  it('tests the nav bar button texts are present on the page', async () => {
    await render(Header, options)
    expect(screen.getByText('Designs')).toBeInTheDocument()
    expect(screen.getByText('Care')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
  })
})
