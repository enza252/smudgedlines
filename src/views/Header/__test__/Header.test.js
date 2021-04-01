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
})
