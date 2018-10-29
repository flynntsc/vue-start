<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="about-text">
      <div class="flyn">测试颜色文本颜色；</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../styles/style.less';
.about-text {
  color: @primaryColor;
  .flyn {
    .flyn(@warnColor);
  }
}
</style>

