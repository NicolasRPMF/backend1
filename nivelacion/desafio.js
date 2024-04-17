const usuarios = [

{
nombre:"Nico",
edad:25,
series:["peaky" , "encargado"]
}

, 

{
nombre:"Dylan",
edad:26,
series:["casados", "games"]
}
]

usuarios.forEach((user)=>{

user.edad++ , user.series.push("simpsons")

})




console.log (usuarios)
