<template>
    <div class="inner my">
        <div class="my-head">
            <div class="my-pic" :class="{active:!userInfo.pic}">
                <img v-if="userInfo.pic" :src="userInfo.pic" alt="">
                <i v-else class="icon-my"></i>
                <input @change="handleUpload($event)" type="file">
            </div>
            <div class="my-head_info">
                <h3>{{userInfo.realname}}</h3>
                <p>部门：{{userInfo.post}}</p>
            </div>
        </div>
        <group class="my-group">
            <cell link="/my/partner" is-link>
                <div slot="icon">
                    <i class="icon-partner blue"></i>
                    <span>我的工作</span>
                </div>
            </cell>
            <cell link="/my/product" is-link>
                <div slot="icon">
                    <i class="icon-product purple"></i>
                    <span>我参与的产品</span>
                </div>
            </cell>
            <cell link="/my/project" is-link>
                <div slot="icon">
                    <i class="icon-project red"></i>
                    <span>我参与的项目</span>
                </div>
            </cell>
        </group>
        <group class="my-group">
            <cell @click.native="logout" class="lgout" title="退出登录"></cell>
        </group>
    </div>
</template>
<style scoped lang="less">
    @import '../../public/less/my.less';
</style>
<script>
    // 引用axios
    import axios from 'axios';
    import {Group,Cell,XButton} from 'vux';
    export default {
        name:"my",
        data () {
            return {
                userInfo:localStorage.userInfo ? JSON.parse(localStorage.userInfo) : ""     
            }
        },
        components: {
            Group,
            Cell,
            XButton
        },
        methods:{
            logout(){
                sessionStorage.userId = "";
                this.$vux.confirm.show({
                    title:"提示",
                    content:"确定要退出系统?",
                    onCancel () {
                        //_this.$vux.toast.text('已取消提示', 'top');
                    },
                    onConfirm: _ => {
                        this.$router.push({path:"/"});
                    }
                })
                
            },
            handleUpload(e){
                var file = e.target.files[0];
				if(!/image\/\w+/.test(file.type)){ //判断获取的是否为图片文件
					this.$vux.toast.text("请确保文件为图像文件",'top');
					return false;
                }
                if(file.size > 1048576){
                    this.$vux.toast.text("请上传小于1M以内的图片",'top');
					return false;
                }
                var fd = new FormData()
                fd.append('file', file)
                this.$http.post({
                    url:"/uploadFile",
                    data:fd,
                    type:"formdata",
                    success: data => {
                        this.setUploadImg(data.filePath);
                    },
                    error: msg => {
                        this.$vux.toast.text(msg, 'top');
                    }
                })
            },
            setUploadImg(imgPath){
                this.$http.post({
                    url:"/my/upload",
                    type:"json",
                    data:{
                        id:this.userInfo.id,
                        pic:imgPath
                    },
                    success: data => {
                        if(process.env.NODE_ENV == "development"){
                            this.userInfo.pic = "http://localhost:8000" + imgPath;
                        }else{
                            this.userInfo.pic = imgPath;
                        };
                        localStorage.userInfo = JSON.stringify(this.userInfo);
                    },
                    error: msg => {
                        this.$vux.toast.text(msg, 'top');
                    }
                })
            }
        }
    }
</script>