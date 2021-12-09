<template>
    <div id="background">
        <div id="box">
            <span id="title">SignIn</span><br/>

            <span class="name">UserName:</span> 
            <input type="text" placeholder="Plz input UserName" v-model="username" class="input"><br/>
            <span v-show="showuser" style="color:red">Plz input your UserName</span><br/>

            <span class="name">Password:</span> 
            <input type="password" placeholder="Plz input Password" v-model="password" class="input"><br/>
            <span v-show="showpass" style="color:red">Plz input your Password</span><br/>
            <span v-show="signin" style="color:red">Your Password and UserName is incorrect!</span><br/>
            <span v-show="wrong" style="color:red">We are sorry that we can't signin now</span><br/>

            <router-link to="/signin/forgetpassword">forget password</router-link><br/>
            Do not have a accout? Go to 
            <a href="http://localhost:8080/#/register">Register</a><br/><br/>
            <span @click="sign()" id="submit">Submit</span><br/>
        </div>
    </div>
</template>

<script>
export default({
    data(){
        return{
			username:"",
			password:"",
            showuser:false,
            showpass:false,
            signin:false,
            wrong:false,
        }
    },
    methods:{
		sign(){
            this.signin=false
            this.wrong=false
            if(this.username==""){this.showuser=true}
            else{this.showuser=false}
            if(this.password==""){this.showpass=true}
            else{this.showpass=false}
            this.axios.post("/signin",{
                username:this.username,
                password:this.password
            })
            .then(response=>{
                if(response.data==1){
                    window.location.href = "http://localhost:8080/#/"
                }
                else if(this.username!=""&this.password!=""&this.wrong==false){
                    this.signin=true
                }
            })
            .catch(error=>{
                this.wrong=true
                error
            })
		},
    }
})
</script>

<style scoped>
#background{
    background: url(../assets/signin.jpg);
    background-size: 100%;
    height: 500px;
    margin: 0px -10px 0px -10px;
	width: 101.4%;
    float: left;
}
    #box{
        background: white;
        padding: 50px;
        width:750px;
        margin: 50px 200px 100px 200px;
        float: left;
    }
        #title{
            font-size: 30px;
            margin-left: 45%;
        }
        .name{
            font-size: 28px;
        }
        .input{
            font-size: 20px;
            margin-left: 10px;
        }
        #submit{
            padding: 10px 50px 10px 50px;
            font-size: 25px;
            color: white;
            margin-top: 50px;
            background: blue;
            border-radius: 20px;
            cursor: pointer;
        }
</style>
