<template>
  <div v-loading.fullscreen.lock="loading">
    <el-row style="height: 10px;" />
    <el-row v-for="(o, index) in blogs" :key="index">
      <el-col class="col">
        <el-card class="card" style="box-shadow: var(--el-box-shadow-dark);text-align: center;" shadow="hover"
          :body-style="{ padding: '60px' }" @click="cardClicked(o.id)">
          {{ o.title }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: {},
      loading: true
    }
  },
  methods: {
    cardClicked(id) {
      this.$router.push("/blog/" + id)
    }
  },
  beforeMount() {
    this.$axios({
      method: "get",
      url: "getall"
    }).then(res => {
      this.blogs = res.data
      this.loading = false;

    })
  },
}
</script>

<style>
.el-row {
  margin-bottom: 60px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (min-width: 900px) {
  .col {
    max-width: 50%;
    margin: auto;
  }
}
</style>