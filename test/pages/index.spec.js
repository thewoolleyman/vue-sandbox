import { readFileSync } from 'fs'
import { mount } from '@vue/test-utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import flushPromises from 'flush-promises'
import index from '~/pages/index'

const mockAxios = new MockAdapter(axios)
const yamlData = readFileSync('static/data-fixture.yml', 'utf8')

describe('index', () => {
  test('works', async () => {
    mockAxios.onGet().reply(200, yamlData)

    const wrapper = mount(index, {})
    await flushPromises()
    expect(wrapper.text()).toMatch('Nunchuck')
  })

  test('handles error', async () => {
    mockAxios.onGet().reply(500, { error: 'errortext' })

    const wrapper = mount(index, {})
    await flushPromises()
    expect(wrapper.text()).toMatch(/error.*errortext/)
  })
})
