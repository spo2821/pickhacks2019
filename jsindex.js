var meremac = {link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26365.097358574316!2d-91.11962970197703!3d38.20233545652116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d966761fda773b%3A0x88fc57c699bcd071!2sMeramec+State+Park!5e0!3m2!1sen!2sus!4v1551604894047", name: "Wilderness Trail", info:"A typical overnight trail, we recommend bringing overnight equipment, including a tent and bear barrels as a safety precaution.  ",  dist:"8.25 Miles", diff:"Advanced - Requires overnight stoppage on trial, and carrying of food and extra water throughout the trip."};
var castlewood = {link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.161789761101!2d-90.53951879847173!3d38.54434540047766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDMyJzQyLjIiTiA5MMKwMzInMDguMiJX!5e0!3m2!1sen!2sus!4v1551604723863", name: "Castlewood Loop Trail", info:"Easy hike, lots of water on the trail, but easy to cross. can get muddy. ",  dist: "2.8 Miles", diff:"Beginner - Not a lot of rough terrain, very little physical challenge."};
var johnsons = {link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101155.57408774209!2d-90.83355027920277!3d37.599530305210656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d9c7ce0fce633d%3A0xbd580eef410dafbb!2sMiddle+Brook%2C+MO+63656!5e0!3m2!1sen!2sus!4v1551606406315", name:"Shut-Ins Trail", info:"A shorter hike, very good views of Johnsons' Shut-In State park. ",  dist:"2.3 Miles", diff:"Beginner - Not a lot of rough terrain, very little physical challenge."};
var johnsons2 = {link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101155.57408774209!2d-90.83355027920277!3d37.599530305210656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d9c7ce0fce633d%3A0xbd580eef410dafbb!2sMiddle+Brook%2C+MO+63656!5e0!3m2!1sen!2sus!4v1551606406315", name:"Scour's Trail", info:"Good chance of seeing wildlife, very scenic.", dist:"10.1 Miles", diff:"Novice - Requires good amount of physical effort, water crossings without bridges."};
var cuivreriv={link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.1088135100313!2d-90.93185308508288!3d39.035638379549496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87de94efedd24f73%3A0xed86f58ccd3ded19!2sCuivre+River+State+Park!5e0!3m2!1sen!2sus!4v1551604935358", name:"Cuivre River Trail", info:"Low amount of hikers, can become very muddy in the spring season.", dist:"13.1 Miles", diff:"Expert - overnight expedition, requires lots of physical effort, and should go with multiple buddies."}
var cuivreriv2={link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.1088135100313!2d-90.93185308508288!3d39.035638379549496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87de94efedd24f73%3A0xed86f58ccd3ded19!2sCuivre+River+State+Park!5e0!3m2!1sen!2sus!4v1551604935358", name:"Old Schoolhouse Trail", info:"Peaceful trail, but is known for having a lot of bugs during the summertime.", dist:"3.8 Miles", diff:"Novice - Requires good amount of physical effort, water crossings without bridges."};
var cuivreriv3={link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.1088135100313!2d-90.93185308508288!3d39.035638379549496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87de94efedd24f73%3A0xed86f58ccd3ded19!2sCuivre+River+State+Park!5e0!3m2!1sen!2sus!4v1551604935358", name:"Big Sugar Creek Trail", info:"Dogs can be walked on this trail, very scenic but easy to get turned around on.", dist:"3.7 Miles", diff:"Beginner - Not a lot of rough terrain, very little physical challenge."};
var trailName="";
var trailInfo="";
var trailDist="";
var trailDiff="";
var val = "";
var trailLink="";
var rnd =0;

window.setInterval(function(){
  val = document.getElementById("rating").value;
}, 1000);

function displayPark(){

  if(val=="beg"){
    rnd = Math.floor(Math.random()*(4-1)+1);
    document.getElementById("gearRec").innerHTML = "Although this is only a beginner route, you should attempt to challenge yourself. We recommend you bring at least 4 Liters of water.";
    if(rnd == 1){
    trailName = castlewood.name;
    trailInfo = castlewood.info;
    trailDist = castlewood.dist;
    trailDiff = castlewood.diff;
    trailLink = castlewood.link;

  } else if(rnd == 2){
    trailName = johnsons.name;
    trailInfo = johnsons.info;
    trailDist = johnsons.dist;
    trailDiff = johnsons.diff;
    trailLink = johnsons.link;

  } else if(rnd ==3){
    trailName = cuivreriv3.name;
    trailInfo = cuivreriv3.info;
    trailDist = cuivreriv3.dist;
    trailDiff = cuivreriv3.diff;
    trailLink = cuivreriv3.link;

  }
} else if(val=="nov"){
  rnd = Math.floor(Math.random()*(3-1)+1);
  document.getElementById("gearRec").innerHTML = "This is a more challenging level of hike, we recommend you carry extra food, aswell is atleast 2 liters of water per every mile and a half of distance.";
    if(rnd == 1){
    trailName = johnsons2.name;
    trailInfo = johnsons2.info;
    trailDist = johnsons2.dist;
    trailDiff = johnsons2.diff;
    trailLink = johnsons2.link;

  } else if(rnd == 2){
    trailName = cuivreriv2.name;
    trailInfo = cuivreriv2.info;
    trailDist = cuivreriv2.dist;
    trailDiff = cuivreriv2.diff;
    trailLink = cuivreriv2.link;

  }
  } else if(val=="adv"){
    document.getElementById("gearRec").innerHTML = "This will be a challenging trail, even for the more experienced hikers. You will need more water and food, enough to last multiple days, aswell as firestarting equipment.";
    trailName = meremac.name;
    trailInfo = meremac.info;
    trailDist = meremac.dist;
    trailDiff = meremac.diff;
    trailLink = meremac.link;

  } else if(val=="exp"){
    /*trailName = .name;
    trailInfo = .info;
    trailDist = .dist;
    trailDiff = .diff;*/
  }
  if(document.getElementById("numBud").value == "none"){
    document.getElementById("buddies").innerHTML = "No matter the level of hike, you should not travel alone. Always have a buddy, and tell someone where you are going, and when you expect to return.";
  } if(document.getElementById("numBud").value == "one"){
    document.getElementById("buddies").innerHTML = "You should always have a buddy for your hike, and it seems like you have that. However, the more the merrier, and make sure you tell someone else where you are going, and when you expect to return.";
  } if(document.getElementById("numBud").value=="enough"){
    document.getElementById("buddies").innerHTML = "You seem to have enough buddies for your hike, just remember. The more the better. Make sure that no one is left behind, and you tell someone where you are going and when you expect to return.";
  }
  document.getElementById("trailName").innerHTML = trailName;
  document.getElementById("trailInfo").innerHTML = trailInfo;
  document.getElementById("trailDist").innerHTML = trailDist;
  document.getElementById("trailDiff").innerHTML = trailDiff;
  document.getElementById("map").src = trailLink;
  document.getElementById("showParks").removeAttribute("hidden");


}
