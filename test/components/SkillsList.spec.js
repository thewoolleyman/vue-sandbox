import { mount } from '@vue/test-utils'
import SkillsList from '~/components/SkillsList'

describe('SkillsList', () => {
  test('works', () => {
    const wrapper = mount(SkillsList, {
      propsData: { skills: [{ desc: 'skill-desc' }] }
    })
    expect(wrapper.text()).toMatch('skill-desc')
  })
})
