console.log("Script is running..");

var container = document.getElementById("container");
for(var i=0; 0 <= 15; i++){

    var prop = document.createElement ("div");

    prop.className = "card";
    prop.id = "card" + i;
    prop.innerHTML = "ok";
    container.append(prop);

}