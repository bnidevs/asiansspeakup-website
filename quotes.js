var insert_quotes = (data) => {
  var quotes_feed = document.getElementById("quotes_feed").children;
  var quotes_formatting = `<p class="section_text quotes_adj"><i class="fas fa-quote-left quotes_quotes left_quote"></i>EMBEDDED_TEXT<i class="fas fa-quote-right quotes_quotes right_quote"></i></p>`;

  for(var t = 0; t < data.length; t++){
    var embed = data[t]["content"]["$t"];
    embed = quotes_formatting.replace("EMBEDDED_TEXT",embed);
    quotes_feed[t%2].innerHTML += embed;
  }
}

fetch("https://spreadsheets.google.com/feeds/cells/1G1O8-CIhHx_JBrHfHpeEldaMWUTmQ2YjvFAhXrrv_Yc/1/public/values?alt=json")
  .then(response => response.json())
  .then(data => data["feed"]["entry"])
  .then(data => insert_quotes(data))
