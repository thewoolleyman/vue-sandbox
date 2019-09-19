import { mount } from '@vue/test-utils'
import SkillLineItem from '../components/skill_line_item'

describe('SkillLineItem', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SkillLineItem, {skill: undefined})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
