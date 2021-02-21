var insert_stories = (data) => {
  var story_feed = document.getElementById("story_feed").children;
  var i = 0;

  for(var t = 0; t < data.length; t++){
    var embed = data[t]["content"]["$t"];
    const script_start = embed.indexOf("<script async src=");
    embed = embed.substr(0,script_start);

    story_feed[i].innerHTML += embed;
    i++;
    i %= 2;
  }
}

fetch("https://spreadsheets.google.com/feeds/cells/1h6OknzVW4CC6GLs5kao1ru__6uRyf57AkQNsna2WZkU/1/public/values?alt=json")
  .then(response => response.json())
  .then(data => data["feed"]["entry"])
  .then(data => insert_stories(data))
  .then(_ => window.instgrm.Embeds.process());
