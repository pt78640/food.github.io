async function search(url){
    try{
        let data=await fetch(url);
        let res=await data.json();
        append(res.meals)
    }catch(error){
console.log(error);
    }
}
var time;
async function get(){
    let input=document.getElementById("search").value;
    try{
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
        let res=await data.json();
        append(res.meals)
    }catch{
        console.log(error);
    }

}
async function inp(){
    let input=document.getElementById("search").value;
    try{
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
        let res=await data.json();
        append(res.meals)
    }catch{
        console.log(error);
    }
}
function debounce(fun,timed){
if(time){
    clearTimeout(time)
}
time=setTimeout(()=>{
    fun()
},timed)
}
function append(data){
    let data1=document.getElementById("data");
    data1.innerHTML=null;
    data.forEach(el=>{
        let div=document.createElement("div");
        div.id="foods";
        let img=document.createElement("img");
        img.src=el.strMealThumb;
        let p=document.createElement("h4");
        p.textContent=el.strMeal;
        div.append(img,p);
        data1.append(div)
    })
}
export {search,get,inp,debounce}