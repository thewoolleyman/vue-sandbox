<template>
  <div class="container">
    <div>
      <h1>Skills:</h1>
      <skills-list :skills="skills" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SkillsList from '../components/SkillsList'
import store from '../store'

export default {
  store,
  components: {
    SkillsList
  },
  computed: {
    ...mapState(['isLoading', 'skills'])
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions(['fetchData'])
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
