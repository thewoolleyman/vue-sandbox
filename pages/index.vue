<template>
  <div class="container">
    <div>
      <h1>Skills:</h1>
      <skills-list :skills="skills" />
    </div>
  </div>
</template>

<script>
import SkillsList from '~/components/SkillsList'

export default {
  components: {
    SkillsList
  },
  data() {
    return {
      skills: [
        {
          desc: 'Bow Hunting',
          id: 'bow-hunting'
        },
        {
          desc: 'Nunchuck',
          id: 'nunchuck'
        },
        {
          desc: 'Computer Hacking',
          id: 'computer-hacking'
        }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 10px;
  min-height: 100vh;
  display: flex;
}
</style>
