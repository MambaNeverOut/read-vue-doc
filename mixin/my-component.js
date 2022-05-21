import { myMixin } from "./my-mixin.js";
export const myComponent = Vue.component("my-component", {
  template: `<template>sss</template>`,
  created() {
    console.log("component 运行了");
    this.helloMixin('component')
  },
  mixins: [myMixin],
});
