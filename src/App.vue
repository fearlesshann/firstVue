<template>
  <el-container>
    <el-header>
      <el-affix >
        <el-menu background-color="#121212" :default-active="activeIndex" :ellipsis="false" router class="el-menu" mode="horizontal">
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
      <div class="dashed" />
      <br/>
      © 2023-2024 YeHan.cc | 
      <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023011372号-1</a>
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

var activeIndex = ref('/')
</script>

<style scoped></style>