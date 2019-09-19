<template>
  <ul class="item-list">
    <SkillLineItem
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
    ></SkillLineItem>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

import SkillLineItem from './skill_line_item'
export default Vue.extend({
  components: {
    SkillLineItem
  },
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
})
</script>

<style>
.item-list {
  list-style: none;
}
</style>
