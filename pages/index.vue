<template>
  <div class="container">
    <div>
      <h1>Skills:</h1>
      <skills-list :skills="skills" />
    </div>
  </div>
</template>

<script>
import { getData } from '../api/getData'
import parseData from '../util/parseData'
import SkillsList from '~/components/SkillsList'

export default {
  components: {
    SkillsList
  },
  data() {
    return {
      skills: []
    }
  },
  created() {
    this.initApp()
  },
  methods: {
    initApp() {
      getData()
        .then((response) => {
          const parsedData = parseData(response.data)
          this.skills = parsedData.skillsList
        })
        .catch((error) => {
          this.skills = [{ id: 'error', desc: error.response.data }]
        })
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
