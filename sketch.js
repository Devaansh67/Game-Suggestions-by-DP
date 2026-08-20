var names = ["FALL GUYS", "AMONG US", "MINECRAFT","GEOMETRY DASH","ROBLOX","FORTNITE"];

var images = ["fallguys.jpg","AMONG_US.png","MINECRAFT.jpg","GEO_DASH.png","ROBLOX.jpg","FORTNITE.png"]

var links = ["https://www.fallguys.com/?lang=en-US", "https://amongusplay.online/","https://www.minecraft.net/en-us","https://www.geometrydash.com/", "https://www.roblox.com/", "https://www.fortnite.com/"]

// make list of game expplanation text
var explanation = [
    "In <b>FALL GUYS</b>, players can choose between making a Race or Survival rounds.<br> There is a budget that limits the amount of objects a round can contain. <br> Players can submit their rounds & can share their rounds to others via share codes.",
    
    "In <b>AMONG US</b>, to win you must complete all the tasks before the imposter kills the crew.<br> Once you are killed, you can continue to complete tasks as a ghost to help your team, but you cannot communicate.",
    "<b>MINECRAFT</b> is a game about placing blocks & going on adventures.<br> Build, play, & explore across infinitely generated worlds of mountains, caverns, oceans, jungles, & deserts.<br> Defeat hordes of zombies, bake a cake of your dreams, venture to new dimensions, or build a skyscraper.<br> What you do in Minecraft is up to you.",
    "<b>GEOMETRY DASH</b> is a game where you can buy or get new skins, pass levals, & practice or save a spot when you die.<br> There are many levals to choose from.",
    "<b>ROBLOX</b> is a game where you can buy stuff with robux, add stuff to your inventory, do obbys, fight monsters, friend other people, eat stuff, get stuff for free, & get new skins. <br>Roblox has unlimited things & games for you to choose from.",
    "<b>FORTNITE</b> is a game where you can get weapons, eat stuff to gain health, fight other people, earn Bbucks, & get new skins.",
] 

function playnow(){
    window.open(links[idx])
    
}

var idx = 0;
function nextgame(){
    idx = idx + 1; 
    if(idx>5){
        idx=0;
    }
    console.log(idx)
    document.getElementById("name").innerHTML = names[idx];
    document.getElementById("images").src = images[idx];
    document.getElementById("ex").innerHTML = explanation[idx];
}



