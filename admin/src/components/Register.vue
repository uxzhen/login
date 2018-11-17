<template>
    <div>
  <el-container class="container">
    <!-- 写入router跳转 index="/register" -->
  <el-header background-color="#545c64"><el-menu router
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
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
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form></el-main>
</el-container>
              
    </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    let checkPass1 = function(rule,value,callback){
      // 密码必须是数字和字母的组合 密码的字符不能是空格 不能是中文 而且长度必须在6-16位之间
      let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;
      if(!reg === value){
        callback(new Error('密码必须是数字和字母数字组合'))
      }else{
        callback()
      }
    }
    let checkPass2 = (rule,value,callback)=>{
      if(value !== this.ruleForm2.password){
        callback(new Error('两次密码不一样'))
      }else{
        callback()
      }
    }
    
    return {
      activeIndex: "/register",
      ruleForm2: {
        password: "",
        checkPass: "",
        username: ""
      },
      rules2:{
          username:[{required:true,message:'请输入用户名',trigger:'blur'},{min:6,mix:13,message:'请输入正确用户名,6-13位字母数字下划线,必须字母开头',trigger:'blur'}],
          password:[{required:true,message:'请输入密码',trigger:'blur'},{validator:checkPass1,trigger:'blur'},
          ],
          checkPass:[{required:true,message:"请确认密码",trigger:'blur'},{validator:checkPass2,trigger:'blur'}]

      }
    };
  },
  methods: {
    //提交
    submitForm(ruleForm2){
      // console.log(this.ruleForm2)
      this.$refs.ruleForm2.validate((valid)=>{
        if(valid){

        }else{
          return Error
        }
      })
    },
    //重置表单
    resetForm(ruleForm2){
      this.$refs[ruleForm2].resetFields()
      //this.$refs.ruleform2.resetFields()
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
