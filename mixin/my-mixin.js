// 定义一个混入对象
export var myMixin = {
  data() {
    return {
      text: "我是mixin中的data",
    };
  },
  created: function () {
    console.log("mixin 运行了");
    console.log("data:" + this.text);
    this.helloMixin("mixin.js");
  },
  // mounted() {
  //   console.log("mixin 的mounted 挂载了");
  // },
  methods: {
    helloMixin: function (fileName) {
      console.log(`局部注册：我是${fileName}中引入的mixin!`);
    },
  },
};
