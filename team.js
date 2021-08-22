var strip = (resp) => {
  var qrystr = "Query.setResponse(";
  var start = resp.indexOf(qrystr) + qrystr.length;

  return resp.substring(start, resp.length - 2);
}

var insert_team = (data) => {
  var team = document.getElementById("team");

  var table = [];

  for(var t = 0; t < data.length; t++){
    var row = data[t];

    var content = row["c"];

    var lst = [];
    for(var k = 0; k < content.length; k++){
      lst.push(content[k]['v']);
    }

    table.push(lst);
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

fetch("https://docs.google.com/spreadsheets/d/1YYkl0rNSd16m3lQvn90fUYD9P_uEz5UsP8XucxDsvl8/gviz/tq?tqx=out:json&sheet=Team")
  .then(response => response.text())
  .then(response => strip(response["body"]))
  .then(response => response.json())
  .then(data => data["table"]["rows"])
  .then(data => insert_team(data));