<template>
    <div>
		<div>
			<div id="white">
				<router-link to="/signin" class="sign">Signin</router-link>
				<span style="margin-left:10px; margin-right:10px;">|</span>
				<router-link to="/register" class="sign">Register</router-link>
				<router-link to="/createorder" class="sign" style="margin-left:400px">
					Sell On Aladdinorder
				</router-link>
				<span style="margin-left:10px; margin-right:10px;">|</span>
				<router-link to="/my/order" class="sign">My order</router-link>
				<span style="margin-left:10px; margin-right:10px;">|</span>
				<router-link to="/my/setting" class="sign">My Settings</router-link>
				<span style="margin-left:10px; margin-right:10px;">|</span>
				<router-link to="/APP/download" class="sign">APP</router-link>
			</div>
			<div id="up">
				<router-link to="/home" id="home">
					<img src="@/assets/Aladdinorder.png" style="margin-top:10px">
				</router-link>
			</div>
		</div>
		<router-view></router-view>
    </div>
</template>

<style scoped>
*{
	font-family: Arial, Helvetica, sans-serif;
	margin-top: -10px;
}
	#white{
		background: rgb(230, 230, 230);
		float: left;
		padding: 20px;
		padding-left: 50px;
		margin: -10px;
		margin-bottom: 0px;
		width: 95.8%;
	}
		.sign{
			text-decoration: none;
			font-size: 20px;
			color: black;
			cursor: pointer;
			margin-bottom: 10px;
		}
	#up{
		width: 99.03%;
		height: 70px;
		padding: 15px;
		margin: -10px;
		margin-bottom: 0px;
		background: rgb(0, 0, 0);
		float: left;
	}
		#home{
			text-decoration: none;
			float: left;
			height: auto;
			margin-left: 20px;
		}
	#pic{
		background: url(assets/aladdin.jpg);
		background-size: 100%;
		float: left;
		margin-top: 0.2px;
		margin-left: -10px;
		margin-right: -10px;
		width: 101.4%;
		height:437px;
	}
		#wipe{
			color: rgb(252, 243, 243);
			margin: 220px 100px 50px 100px;
			font-size: 35px;
		}
		.button{
			background: white;
			color: black;
			border-radius: 50px;
			margin-left: 100px;
			padding: 5px 30px 5px 30px;
			font-size: 35px;
		}
</style>