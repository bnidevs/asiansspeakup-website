var insert_stories = (data) => {

  var debug = false;
  var story_feed = document.getElementById("story_feed").children;
  var stories_formatting = `<div class="section-text"><p style="float: left; margin:20px"><img src="__IMG__" style="max-width:230px; max-height:95px; border-left:5px;"></p><b>__NAME__</b>__DESC__</div>`;
  stories_formatting = stories_formatting.replace("__IMG__", "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/169273562_1470756416606123_5412571239174192373_n.jpg?tp=1&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=0ihMFaVSnmgAX8O_4s-&edm=APU89FAAAAAA&ccb=7-4&oh=90f8a2ccd39451c87386edf0a38a0347&oe=6098C479&_nc_sid=86f79a")
  var col_names = ['desc','name','link', 'img']
  var num_rows = data['length'];
  var num_cols = 3;
  
  for(var row = 0; row < num_rows-num_cols; row+=num_cols){

    var story = stories_formatting;

    for(var col = 0; col < num_cols; col++){

      var eltnum = col+row;
      story = story.replace("__"+col_names[col].toUpperCase()+"__",data[eltnum]['content']['$t'])
      
      if (debug){
        console.log(col);
        console.log(row);
        console.log(data[eltnum]['content']['$t']);
      }
    }

    story_feed[row/num_cols%2].innerHTML += story;

//   for(var id = 0; id < data.length; id++){
//     // var embed = data[t]["content"]["$t"];
//     // const script_start = embed.indexOf("<script async src=");
  }
}

fetch("https://spreadsheets.google.com/feeds/cells/1JedpBrpWUCPTraKcJOvqq2R-luH21PpgBETIxBhp-HU/1/public/values?alt=json")
  .then(response => response.json())
  .then(data => data["feed"]["entry"])
  .then(data => insert_stories(data));