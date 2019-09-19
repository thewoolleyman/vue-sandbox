import Vue from "vue";

export default Vue.extend({
  template: 'skill_line_item',
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
});
