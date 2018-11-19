<template>
    <div>
  <el-container class="container">
  <el-header background-color="#545c64"><el-menu router
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="/register">注册</el-menu-item>
  <el-menu-item index="/login">登录</el-menu-item>
</el-menu></el-header>
  <el-main>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form></el-main>
</el-container>
              
    </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: "Login",
  data() {
    return {
      activeIndex: "/login",
      ruleForm2: {
        password: "",
        username: ""
      },
      rules2:{
        username:[{required:true,message:'请输入用户名',trigger:'blur'},{min:6,mix:13,message:'请输入正确用户名,6-13位字母数字下划线,必须字母开头',trigger:'blur'}],
      password:[{required:true,message:'请输入密码',trigger:'blur'}]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          request({
            url:'/login',
            method:'post',
            data:this.ruleForm2
          }).then(res=>{
            console.log('登录请求发送成功')
          }).catch(err=>{
            console.log(err)
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
    .container{
      width: 70%;
      margin: 0 auto
    }
    .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    background-color:#545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
