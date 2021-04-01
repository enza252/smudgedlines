import Index from '@/pages'
import { render } from '@testing-library/vue'
import Vuetify from 'vuetify'

const options = {
  routes: [],
  vuetify: new Vuetify()
}

let fragment

beforeAll(async () => {
  const { asFragment } = await render(Index, options)
  fragment = asFragment
})

describe('tests the index page renders', () => {
  it('performs a snapshot test', () => {
    expect(fragment).toMatchSnapshot()
  })
})
