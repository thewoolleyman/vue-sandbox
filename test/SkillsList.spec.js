import { mount } from '@vue/test-utils'
import SkillsList from '~/components/SkillsList'

describe('SkillsList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SkillsList, {
      propsData: { skills: [{ desc: 'skill-desc' }] }
    })
    expect(wrapper.text()).toMatch('skill-desc')
  })
})
