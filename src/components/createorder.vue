<template>
    <div>
        add order<br/>
        Ordername:
        <input type="text" placeholder="Plz input OrderName" v-model="ordername"><br/>
        Price:
        <input type="text" placeholder="Plz input Price" v-model="price"><br/>
        <button @click="insertorder()">submit</button><br/>
        <button @click="getorderall()">getorder</button>
		<div v-show="show" v-for="getorder in getorders" :key="getorder">
			{{getorder.ordername}},
			{{getorder.price}}!
		</div>
    </div>
</template>

<script>
export default({
    data(){
        return{
            show:false,
            getorders:"",
            ordername:"",
            price:"",
        }
    },
    methods:{
		insertorder(){
			this.axios.post("/insertorder",{
                ordername:this.ordername,
                price:this.price
            })
            alert("You create a order now!")
		},
		getorderall(){
			this.axios.post("/getorder")
			.then(response=>{
				this.getorders=response.data
				console.log(response.data)
			})
            this.show=true
        }
    }
})
</script>