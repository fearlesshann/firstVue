<template>
    <el-dialog align-center center style="max-width: 300px;" v-model="dialogFormVisible" title="请输入密码">
        <el-input type="password" v-model="this.password" autocomplete="off" />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="cancelEdit">取 消</el-button>
                <el-button type="primary" @click="updateBlog">确 认</el-button>
            </span>
        </template>
    </el-dialog>
    <!-- <h1 v-if="id === '0'" style="text-align: center; color: #b4b4b4;">添加新的Blog</h1>
    <h1 v-if="id != '0'" style="text-align: center; color: #b4b4b4;">修改Blog</h1> -->
    <el-row style="height: 20px;" />
    <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="12">
            <el-input style="box-shadow: var(--el-box-shadow-dark);" maxlength="50" show-word-limit size="large"
                v-model="title" placeholder="请输入Blog标题" />
        </el-col>
        <el-col :span="6"></el-col>
    </el-row>
    <el-row>
        <el-col :span="6"></el-col>
        <el-col style="box-shadow: var(--el-box-shadow-dark);" :span="12">
            <v-md-editor v-model="content" height="400px"></v-md-editor>
        </el-col>
        <el-col :span="6"></el-col>
    </el-row>
    <div class="button">
        <el-button style="box-shadow: var(--el-box-shadow-light);" size="large" plain @click="postBlog">确 定</el-button>
    </div>
</template>
<script>
export default {
    props: {
        blogId: {
            type: String,
            default: "0"
        },
    },
    data() {
        return {
            id: '0',
            title: '',
            content: '',
            dialogFormVisible: false,
            password: ''
        }
    },
    beforeMount() {
        this.id = this.blogId;
        if (this.blogId !== '0') {
            this.$axios({
                method: "get",
                url: "get",
                params: {
                    'id': this.blogId,
                },
            }).then(res => {
                this.title = res.data.title
                this.content = res.data.content
            })
        }
    },
    methods: {
        postBlog() {
            if (this.title === '' || this.content === '') {
                ElNotification({
                    title: '错误',
                    message: 'Blog 标题或内容为空!',
                    type: 'error',
                    offset: 100,
                })
                return
            }
            if (this.id === '0') {
                this.$axios({
                    method: 'post',
                    url: "add",
                    data: {
                        'title': this.title,
                        'content': this.content,
                    }
                }).then(res => {
                    this.title = ''
                    this.content = ''
                    ElNotification({
                        title: '成功',
                        message: 'Blog 上传成功!',
                        type: 'success',
                        offset: 100,
                    })
                    this.$router.push("/")
                })
            } else {
                this.dialogFormVisible = true
            }
        },
        updateBlog() {
            this.dialogFormVisible = false
            this.$axios({
                method: 'post',
                url: "update",
                data: {
                    'id': this.id,
                    'title': this.title,
                    'content': this.content,
                },
                params:{
                    'password': this.password
                }
            }).then(res => {
                if (res.data === '修改成功！') {
                    this.id = '0'
                    this.title = ''
                    this.content = ''
                    ElNotification({
                        title: '成功',
                        message: 'Blog 修改成功!',
                        type: 'success',
                        offset: 100,
                    })
                    this.$router.push("/")
                } else {
                    ElNotification({
                        title: '失败',
                        message: res.data,
                        type: 'error',
                        offset: 100,
                    })
                }
            })
        },
        cancelEdit() {
            this.dialogFormVisible = false
            this.password = ""
        }
    },
}
</script>
<style scoped>
.button {
    text-align: center;
}
</style>

