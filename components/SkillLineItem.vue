<template>
  <li>{{ skill.desc }}</li>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>
