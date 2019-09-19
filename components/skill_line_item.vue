<template>
  <li>{{ skill.desc }}</li>
</template>

<script lang="ts">
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>
