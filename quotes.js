var insert_stories = (data) => {
  var story_feed = document.getElementById("quotes_feed").children;
  var i = 0;

  for(var t = 0; t < data.length; t++){
    var embed = data[t]["content"]["$t"];
    embed = "<p class=\"section_text\">\"" + embed + "\"</p>";
    story_feed[t%2].innerHTML += embed;
  }
}

fetch("https://spreadsheets.google.com/feeds/cells/1G1O8-CIhHx_JBrHfHpeEldaMWUTmQ2YjvFAhXrrv_Yc/1/public/values?alt=json")
  .then(response => response.json())
  .then(data => data["feed"]["entry"])
  .then(data => insert_stories(data))
