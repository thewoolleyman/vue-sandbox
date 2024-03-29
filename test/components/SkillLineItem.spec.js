import { mount } from '@vue/test-utils'
import SkillLineItem from '~/components/SkillLineItem'

describe('SkillLineItem', () => {
  test('works', () => {
    const wrapper = mount(SkillLineItem, {
      propsData: { skill: { desc: 'skill-desc' } }
    })
    expect(wrapper.text()).toMatch('skill-desc')
  })
})
