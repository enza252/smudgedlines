import Index from '@/pages'
import { render } from '@testing-library/vue'
import Vuetify from 'vuetify'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

describe('tests the index page renders', () => {
  it('performs a snapshot test', async () => {
    const { asFragment } = await render(Index, options)
    expect(asFragment).toMatchSnapshot()
  })
})
