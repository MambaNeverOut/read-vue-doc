Vue.config.optionMergeStrategies.methods = function (toVal, fromVal) {
  // 返回合并后的值
  // console.log(toVal); // 父实例的 methods
  // console.log(fromVal); //子实例中的 methods
  if (toVal) return toVal;
  if (fromVal) return fromVal;
};
