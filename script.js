const url="https://restcountries.eu/rest/v2/all";

fetch(url)
.then(function(reponse){
  return reponse.json();
})
.then(function(data){
    for(let i=0; i<data.length; i++){
   var img=document.createElement("div");
   img.innerHTML=`<img class="img" src="${data[i].flag}"/>`
   var div=document.createElement("div");
   div.innerHTML=`<div class="container"><h3>${data[i].name}</h3>
   <p><span class="title">Population:</span>${data[i].population}</p>
    <p><span class="title">Region:</span>${data[i].region}</p>
    <p><span class="title">Capital:</span>${data[i].capital}</p>
    </div>`
   
   document.body.append(img,div);
   
    }
    console.log(data);
})
.catch(function(error){
  console.log(error);
});

var a=[{name:"karthick"},
{name:"siva"}];

//console.log(a[0].name);