var strip = (resp) => {
  var qrystr = "Query.setResponse(";
  var start = resp.indexOf(qrystr) + qrystr.length;

  return resp.substring(start, resp.length - 2);
}

var insert_stories = (data) => {

  var debug = false;
  var story_feed = document.getElementById("story_feed").children;
  var stories_formatting = `<div class="stories_div">
    <p class=stories_img_p>
      <a href="__LINK__"><img src="__IMG__" class="stories_img"></a>
    </p>
    
    <b class="stories_header">__NAME__</b><br><div class="stories_text">__DESC__ </div>
  </div>`;
 
  var col_names = ['desc','name','link']

  var num_rows = data.length;
  const num_cols = 3;
  
  for(var row = 0; row < num_rows; row++){

    var story = stories_formatting;

    story = story.replace("__IMG__","./assets/story_photos/"+(num_rows-row)+".jpeg")

    var row_content = data[row]['c'];

    for(var col = 0; col < num_cols; col++){

      var eltnum = col+(row*num_cols);
      story = story.replace("__"+col_names[col].toUpperCase()+"__", row_content[col]['v'])
      
      if (debug){
        console.log(col);
        console.log(row);
        console.log(data[eltnum]['content']['$t']);
      }
    }

    story_feed[row%2].innerHTML += story;

//   for(var id = 0; id < data.length; id++){
//     // var embed = data[t]["content"]["$t"];
//     // const script_start = embed.indexOf("<script async src=");
  }
}

fetch("https://docs.google.com/spreadsheets/d/1JedpBrpWUCPTraKcJOvqq2R-luH21PpgBETIxBhp-HU/gviz/tq?tqx=out:json&sheet=Sheet1")
  .then(response => response.text())
  .then(response => JSON.parse(strip(response)))
  .then(data => data["table"]["rows"])
  .then(data => insert_stories(data));