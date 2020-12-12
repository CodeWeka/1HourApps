<template>
  <div>
    <b-list-group>
      <b-list-group-item :to="{name:'CountDown'}">CountDown App</b-list-group-item>
      <b-list-group-item>2</b-list-group-item>
      <b-list-group-item>3</b-list-group-item>
      <b-list-group-item>4</b-list-group-item>
      <b-list-group-item>5</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Apps extends Vue {}
</script>
