import { mount } from '@vue/test-utils'
import SkillLineItem from '~/components/SkillLineItem'

describe('SkillLineItem', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SkillLineItem, {
      propsData: { skill: { desc: 'skill-desc' } }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.text()).toMatch('skill-desc')
  })
})
