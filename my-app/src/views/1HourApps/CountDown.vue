<template>
  <b-container class="cd-container">
    <b-row class="cd-row" />
    <b-row class="cd-row" />
    <b-row class="cd-row" />
    <b-row class="cd-row">
      <b-col class="cd-col">
        <strong>{{ year }} <br> year</strong>
      </b-col>
      <b-col class="cd-col">
        <strong>{{ month % 12 }} <br> month</strong>
      </b-col>
      <b-col class="cd-col">
        <strong>{{ week % 7 }} <br> week</strong>
      </b-col>
      <b-col class="cd-col">
        <strong>{{ day % 24 }} <br> day</strong>
      </b-col>
      <b-col class="cd-col">
        <strong>{{ hour % 60 }} <br> hour</strong>
      </b-col>
      <b-col class="cd-col">
        <strong>{{ minute % 60 }} <br> minute</strong>
      </b-col>
      <b-col class="cd-col">
        <strong>{{ second % 60 }} <br> second</strong>
      </b-col>
    </b-row>
    <b-row class="cd-row">
      <b-col class="cd-col" />
      <b-col class="cd-col">
        <b-form-datepicker
          v-model="targetDate"
          :value-as-date="true"
          locale="en-nz"
          class="mb-2"
        ></b-form-datepicker>
      </b-col>

      <b-col class="cd-col" />
    </b-row>
    <b-row class="cd-row" />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class CountDown extends Vue {
  public currentTime = Date.now();
  public targetDate = new Date("January 1, 21 00:00:00 GMT+00:00");

  public second = "";
  public minute = undefined;
  public hour = undefined;
  public day = undefined;
  public week = undefined;
  public month = "";
  public year = "";

  public created() {
    window.setInterval(this.getTime, 1000);
  }

  public getTime() {
    this.currentTime = Date.now();
    const timeLeft = this.targetDate - this.currentTime;
    this.second = Math.floor(timeLeft / 1000);
    this.minute = Math.floor(this.second / 60);
    this.hour = Math.floor(this.minute / 60);
    this.day = Math.floor(this.hour / 24);
    this.week = Math.floor(this.day / 7);
    this.month = Math.floor(this.day / 30);
    this.year = Math.floor(this.month / 12);
  }
}
</script>

<style scoped>
.cd-container {
  background: url("https://images.unsplash.com/photo-1429704658776-3d38c9990511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1860&q=100");
  background-size: cover;
  display: flex;
  flex-flow: column wrap;
  min-width: 100%;
  min-height: 90vh;
  padding: 0;
}

.cd-row {
  margin: 0;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;
  padding: 0;
}

.cd-col {
  font-size: 5em;
}
</style>
