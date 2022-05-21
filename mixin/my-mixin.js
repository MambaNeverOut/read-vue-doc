// 定义一个混入对象
export var myMixin = {
  created: function () {
    console.log('mixin 运行了');
    this.helloMixin('mixin.js');
  },
  methods: {
    helloMixin: function (fileName) {
      console.log(`我是${fileName}中的mixin!`);
    },
  },
};
