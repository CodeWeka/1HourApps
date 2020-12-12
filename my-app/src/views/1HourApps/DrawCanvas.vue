<template>
  <b-container class="da-container">
    <b-row class="da-row" />
    <b-row class="da-row"> {{ x }},{{ y }} </b-row>
    <b-row class="da-row">
      <canvas
        id="drawCanvas"
        class="da-canvas"
        width="1200"
        height="900"
        @mousemove="draw"
        @mousedown="beginDrawing"
        @mouseup="stopDrawing"
      >
      </canvas>
    </b-row>
    <b-row class="da-row">
      <b-col class="da-col"></b-col>

      <b-col class="da-col">
        {{ brushColor }}
        <b-form-input
          type="color"
          style="height:9em"
          v-model="brushColor"
        ></b-form-input>
      </b-col>
      <b-col class="da-col"></b-col>

      <b-col class="da-col"
        >Brush Size {{ brushSize
        }}<b-form-input
          type="range"
          min="1"
          max="50"
          step="1"
          v-model="brushSize"
        ></b-form-input>
      </b-col>
      <b-col class="da-col"></b-col>

      <b-col class="da-col">
        <b-button
          large
          block
          class="mt-3"
          variant="danger"
          style="font-size: 1em;height:4em"
          @click="clearCanvas"
          >Clear</b-button
        ></b-col
      >
      <b-col class="da-col"></b-col>
    </b-row>
    <b-row class="da-row" />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class DrawCanvas extends Vue {
  public dCanvas = null;
  public x = 0;
  public y = 0;
  public brushColor = "#000000";
  public brushSize = 1;
  public isDrawing = false;

  public mounted(): void {
    const d = document.getElementById("drawCanvas");
    this.dCanvas = d.getContext("2d");
  }
  public clearCanvas() {
    const ctx = this.dCanvas;
    const d = document.getElementById("drawCanvas");
    ctx.clearRect(0, 0, d.width, d.height);
  }
  public mouseCoordinates(e: Event) {
    this.x = e.offsetX;
    this.y = e.offsetY;
  }
  public drawLine(x1: number, y1: number, x2: number, y2: number) {
    const ctx = this.dCanvas;
    ctx.beginPath();
    ctx.strokeStyle = this.brushColor;
    ctx.lineWidth = this.brushSize;
    ctx.lineCap = "round";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }

  public draw(e: Event) {
    if (this.isDrawing) {
      this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }

  public beginDrawing(e: Event) {
    this.x = e.offsetX;
    this.y = e.offsetY;
    this.isDrawing = true;
  }

  public stopDrawing(e: Event) {
    if (this.isDrawing) {
      this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
      this.x = 0;
      this.y = 0;
      this.isDrawing = false;
    }
  }
}
</script>

<style scoped>
.da-container {
  background: url("https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=100");
  background-size: cover;
  display: flex;
  flex-flow: column wrap;
  min-width: 100%;
  min-height: 98vh;
  padding: 0;
}

.da-row {
  margin: 0;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;
  padding: 0;
}

.da-col {
  font-size: 3em;
}
.da-canvas {
  border: 1px solid grey;
  background-color: rgb(255, 255, 255, 0.8);
}
</style>
