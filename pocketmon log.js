Array.prototype.clone = function() {
	return this.slice(0);
};

var panelStyle = "position: absolute;"
	+ "border:1px solid black;"
	+ "height: 600px;"
	+ "width: 600px;"
	+ "overflow:scroll;"
	+ "top: 150px;"
	+ "right: 150px;"
	+ "z-index: 1000;"
	+ "background-color : white";

function infoWindowStringV2(pokemon){
	var disguiseString = "";
  if (pokemon.disguise != 0) {
    disguiseString = " (" + getDisguisePokemonName(pokemon) + ")";
  }
  
  var ivString = "<b>IV</b>: unknown";
  
  var movesetString = "<b>Skill</b>: unknown";
  if (pokemon.attack != -1 && pokemon.defence != -1 && pokemon.stamina != -1 && pokemon.move1 != -1 && pokemon.move2 != -1) {
    var ivPercent = getIvPercent(pokemon);
    var highIvPercentStyle="";
    if(ivPercent > 80){
	highIvPercentStyle = "color:red";
    }
    ivString = "<span style='"+highIvPercentStyle+"'><b>IV</b>: "+ ivPercent + "% ("+pokemon.attack + " | " + pokemon.defence + " | " + pokemon.stamina+") </span>";
    movesetString = "<span style='"+highIvPercentStyle+"'><b>Skill:</b> " + getMoveName(pokemon.move1) + " | " + getMoveName(pokemon.move2)+"</span>";
  }
  movesetString += "&nbsp;";
  
  return '<b>' + disguiseString + "</b> " + ivString + movesetString + timeToString(pokemon.remainingTime()) + ' | <a target="_blank" href="http://maps.google.com/maps?q=' + pokemon.center.lat + ',' + pokemon.center.lng + '">Maps</a>';
}

function getIvPercent(pokemon){
	return Math.floor((pokemon.attack + pokemon.defence + pokemon.stamina)/45 * 100);
}

function pocketmonInfos(){
	$("#pocketmon_log").empty();
	var pokemonsNew = pokemons.clone();
	pokemonsNew.sort(function(a, b){
		var ap = getIvPercent(a);
		var bp = getIvPercent(b);
		if(ap === bp){
			return (b.attack - a.attack);
		}
		return bp - ap;
	});
	for(var i=0;i<pokemonsNew.length;i++){
		var $appendData = "<p>";
		$appendData += "<img src='https://seoulpokemap.com/images/poke/"+pokemonsNew[i].id+".png?ver13'  style='width:26px;height:26px' />"; //icon
		$appendData += infoWindowStringV2(pokemonsNew[i]);
		$appendData += "</p>";
		$("#pocketmon_log").append($appendData);
	}
}
$("body").prepend("<div style='"+panelStyle+"'><h4>PocketMon Log</h4><h5>IV : IV% (attack | defence | stamina) Skill : skill1 | skill2 remainTime(minute:second)</h5><div id='pocketmon_log'></div></div><br/>");


setInterval(function(){pocketmonInfos()},1000);