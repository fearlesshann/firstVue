<template>
    <el-container>
        <el-col :span="6"></el-col>
        <el-col :span="12">
            <div class="mblog">
                <h1 style="font-size: 35px; color: rgb(240, 240, 240);" align="center">{{ blog.title }}</h1>
                <div style="box-shadow: var(--el-box-shadow-dark);" class="markdown-body" v-html="blog.content"></div>
            </div>
        </el-col>
        <el-col :span="6">
            <el-button style="box-shadow: var(--el-box-shadow-light);" size="large" plain
                @click="cardClicked(this.id)">修改</el-button>
        </el-col>
    </el-container>
</template>
<script>
import 'github-markdown-css'
export default {
    props: {
        id: {
            type: String,
            default: "0"
        }
    },
    data() {
        return {
            blog: {
                id: '',
                title: '',
                content: ''
            }
        }
    },
    methods: {
        cardClicked(id) {
            this.$router.push("/editBlog/" + id)
        }
    },
    beforeMount() {
        this.$axios({
            method: "get",
            url: "get",
            params: {
                'id': this.id,
            },
        }).then(res => {
            var MarkdownIt = require('markdown-it')
            var md = new MarkdownIt();
            var result = md.render(res.data.content);
            this.blog = res.data
            this.blog.content = result
        })
    },
}
</script>

<style scoped>
.mblog {
    padding: 20px, 15px;
}
</style>