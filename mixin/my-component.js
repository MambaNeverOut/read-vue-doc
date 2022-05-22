import { myMixin } from "./my-mixin.js";
export const myComponent = Vue.component("my-component", {
  data() {
    return {
      text: "我是component中的data",
    };
  },
  created() {
    console.log("component 运行了");
    console.log("data:" + this.text);
    // this.helloVueMixin('component')
    this.helloMixin("component");
  },
  // mounted() {
  //   console.log('component 挂载了')
  // },
  methods: {
    helloMixin: function (fileName) {
      console.log(`组件内部注册：我是${fileName}中引入的mixin!`);
    },
  },
  mixins: [myMixin],
});
