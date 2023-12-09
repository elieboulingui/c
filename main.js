document.querySelector("select").onchange = function(){
 document.querySelector("body").style.backgroundColor=this.value;
}
document.querySelector("form").onsubmit = ()=>{
    document.querySelector('#input').disabled= true;
    document.querySelector(".tasks").onkeyup =()=>{
        if(document.querySelector(".tasks").value.length>0){
            document.querySelector('#input').disabled= false;
        }else{
            document.querySelector("#input").disabled = true;
        }
    }
    const task = document.querySelector(".tasks").value;
  const li =document.createElement("li")
  li.innerHTML = task
  document.querySelector("#tasks").append(li)
  document.querySelector(".tasks").value='';
    return false
}
function count(){
    let counter = localStorage.getItem('counter')
    counter++
    document.querySelector('h2').innerHTML= counter
    localStorage.setItem("counter",counter)
}
document.querySelector("h2").innerHTML = localStorage.getItem("counter")
document.querySelector("button").onclick= count
 const fe =fetch("https://api.exchangeratesapi.io/latest?base=USD")
 .then(response=>{
    return response.json({})
  
 })
 .then((data=>{
    console.log(data)
 }))