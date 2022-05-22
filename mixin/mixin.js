Vue.mixin({
  methods: {
    helloVueMixin: function (fileName) {
      console.log(`全局注册：我是${fileName}中的mixin!`);
    },
  },
});
