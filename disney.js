async function foo(){
    let res=await fetch("https://api.disneyapi.dev/characters");
    let res1=await res.json();
    console.log(res1);
    let result=res1.data;
    console.log(result);
    
    for(var i=0;i<result.length;i++){
        console.log(result[i]);
      var div=document.createElement("div");
      div.setAttribute("class","col-md-3")
      div.innerHTML=`
      <div class="card border-success mb-3" style="max-width: 18rem;">
      <div class="card-body text-success">

      <img src="${result[i].imageUrl}"   style="height:200px; width:200px" alt="">
        <h5 class="card-title" >ID Number: ${result[i]._id}</h5>
        <h5 class="card-title" >Film Name : ${result[i].name}</h5>
        <h5 class="card-title" >TV Shows : ${result[i].tvShows}</h5>
        <h5 class="card-title" >Video Games : ${result[i].videoGames[0]}</h5>
        <a href="${result[i].url}" class="search">Click URL</a>
                             
      </div>
    </div>`

   
    
       document.getElementById("tc").append(div);

    }
   
}
foo();