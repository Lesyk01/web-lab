let container = document.getElementById("data-container");
let info_container = document.getElementById("info-container");
data_arr=[];

async function show_data(id,loc){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id+"/")
    let json = await response.json();

    let div = document.createElement("div");
    let img = document.createElement("img");
    let header = document.createElement("h1");
    let txt = document.createElement("p");

    div.classList="card-box";
    div.onclick=function(){
        window.location.href="inf-index.html?id="+id;
    }
    img.src=json["sprites"]["front_default"];
    header.innerText=json["forms"][0]["name"];
    if(loc==info_container){
        txt.innerText="abilities : "+json["abilities"].length +"\n"+
                  "weight : "+json["weight"];
    }
    
    div.append(img);
    div.append(header);
    div.append(txt);
    loc.append(div);
    
}
if(container){
    for (let i =1; i <= 20; i++) {
        show_data(i,container);
    }
}
if(info_container){
    let id=window.location.href.split("id=")[1];
    show_data(id,info_container);
}
