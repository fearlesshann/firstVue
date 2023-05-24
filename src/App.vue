<template>
  <el-container>
    <el-header>
      <el-affix>
        <el-menu background-color="#121212" :default-active="activeIndex" :ellipsis="false" router class="el-menu"
          mode="horizontal">
          <el-col :span="2"></el-col>
          <el-image style="width: 160px; height: 50px" :src="'logo1.png'" :fit="'contain'" />
          <el-col :span="15"></el-col>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/createBlog">添加</el-menu-item>
        </el-menu>
      </el-affix>
    </el-header>
    <el-main>
      <router-view></router-view>
      <el-backtop style="box-shadow: var(--el-box-shadow-dark); width: 60px; height: 60px;" :right="380" :bottom="200" />
    </el-main>
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

<style scoped></style>