<template>
  <el-container>
    <el-header>
      <el-affix>
        <div class="navbar-wrapper">
          <div class="header-container">
            <div class="logo-container">
              <img src="/logo1.png" style="width: 107; height: 50px">
            </div>
            <div class="content">
              <el-menu background-color="#121212" :default-active="activeIndex" :ellipsis="false" router class="el-menu"
                mode="horizontal">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/createBlog">添加</el-menu-item>
              </el-menu>
            </div>
          </div>
          <el-divider style="top: -25px;" />
        </div>
      </el-affix>
    </el-header>
    <el-main>
      <router-view></router-view>
      <el-backtop class="backtop" style="box-shadow: var(--el-box-shadow-dark);" />
    </el-main>
    <el-divider />
    <el-footer style="text-align: center;">
      <p style="color:#939393;">© 2023-2024 YeHan.cc</p>
      <a target="_blank" href="https://beian.miit.gov.cn/"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;" />
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">蜀ICP备2023011372号-1
        </p>
      </a>
      <div style="width:300px;margin:0 auto; padding:20px 0;">
        <img src="/beian.png">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502011855"
          style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src=""
            style="float:left;" />
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">苏公网安备 32011502011855号
          </p>
        </a>
      </div>
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

var activeIndex = ref('/')
</script>

<style scoped>
.navbar-wrapper {
  position: relative;
  padding: 0 12px 0 24px;
  background-color: #121212;
  top: 0;
  height: 58px;
}

.navbar-wrapper .header-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
}

.navbar-wrapper .header-container .content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

@media screen and (min-width: 900px) {
  .backtop {
    width: 60px;
    height: 60px;
  }
}
</style>