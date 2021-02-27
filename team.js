var insert_team = (data) => {
  var team = document.getElementById("team");

  var incr = 0;

  var table = [];

  for(var t = 0; t < data.length; t++){
    var info = data[t]["content"]["$t"];
    var rownum = data[t]["gs$cell"]["row"];

    if(rownum != incr){
    	if(incr != 0 && table[incr - 1].length == 4){
    		table[incr - 1].splice(0, 0, "");
    	}

    	incr++;
    	table.push([]);
    }

    table[incr - 1].push(info);
  }

  if(incr != 0 && table[incr - 1].length == 4){
    table[incr - 1].splice(0, 0, "");
  }

  for(var t = 0; t < table.length; t++){
  	var elem = '<div class="flex section pad"><div class="flex flex_col right_align"><img class="team_photo" src="' + 
  	table[t][0] + 
  	'"></img></div><div class="flex flex_col"><div class="header name_width">' + 
  	table[t][1] + ' ' + table[t][2] + 
  	'</div><div class="position_font">' + 
  	table[t][3] + 
  	'</div><p class="section_text">' +
  	table[t][4] +
  	'</p></div></div>';

  	team.innerHTML += elem;
  }
}

fetch("https://spreadsheets.google.com/feeds/cells/1YYkl0rNSd16m3lQvn90fUYD9P_uEz5UsP8XucxDsvl8/1/public/values?alt=json")
  .then(response => response.json())
  .then(data => data["feed"]["entry"])
  .then(data => insert_team(data));