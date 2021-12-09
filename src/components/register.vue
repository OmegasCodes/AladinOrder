<template>
    <div id="background">
		<div id="box">
			<span id="title">Register</span><br/>
			<span class="name">UserName: </span>
			<input type="text" placeholder="Plz input UserName" v-model="username" 
			autocomplete="off" class="input"><br/>
            <span v-show="showuser" style="color:red">Plz input your username</span><br/>
			<span class="name">Password: </span>
			<input type="password" placeholder="Plz input Password" v-model="password" 
			autocomplete="off" class="input"><br/>
            <span v-show="showpass" style="color:red">Plz input your Password</span><br/>
			<span class="name">Email: </span>
			<input type="text" placeholder="Plz input Email" v-model="email" 
			autocomplete="off" class="input"><br/>
            <span v-show="showmail" style="color:red">Plz input your Email</span><br/>
            <span v-show="wrong" style="color:red">We are sorry that we can't register now</span><br/>
            Already have a accout? Go to 
            <a href="http://localhost:8080/#/signin">Signin</a><br/><br/>
            <span @click="insertuser()" id="submit">Submit</span><br/>
		</div>
    </div>
</template>

<script>
	export default({
		data(){
			return{
				username:"",
				password:"",
				email:"",
				showuser:false,
				showpass:false,
				showmail:false,
				wrong:false,
				users:"",
				user:"",
			}
		},
		methods:{
			insertuser(){
				this.wrong=false
				if(this.username==""){this.showuser=true}
				else{this.showuser=false}
				if(this.password==""){this.showpass=true}
				else{this.showpass=false}
				if(this.email==""){this.showmail=true}
				else{this.showmail=false}

				this.axios.post("/getuser")
				.then(response=>{
					this.users=response.data
				})
				.catch(error=>{
					error
					this.wrong=true
				})
				for(var i=0;i<this.users(length);i++){
					alert(this.user[i].username)
				}
				if(this.showuser==false&this.showpass==false&this.showmail==false){
					this.axios.post("/insertuser",{
						username:this.username,
						password:this.password,
						email:this.email,
					})
					.then(response=>{
						if(response.data==1){
							window.location.href = "http://localhost:8080/#/signin"
						}
					})
					.catch(error=>{
						error
						this.wrong=true
					})
				}
			},
        }
    })
</script>

<style scoped>
#background{
    background: url(../assets/reginster.jpg);
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
