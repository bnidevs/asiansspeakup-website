var strip = (resp) => {
  var qrystr = "Query.setResponse(";
  var start = resp.indexOf(qrystr) + qrystr.length;

  return resp.substring(start, resp.length - 2);
}

var insert_quotes = (data) => {
  var quotes_feed = document.getElementById("quotes_feed").children;
  var quotes_formatting = `<p class="section_text quotes_adj"><i class="fas fa-quote-left quotes_quotes left_quote"></i>EMBEDDED_TEXT<i class="fas fa-quote-right quotes_quotes right_quote"></i></p>`;

  for(var t = 0; t < data.length; t++){
    var row = data[t];

    var content = row["c"];

    var embed = content[0]['v'];
    embed = quotes_formatting.replace("EMBEDDED_TEXT", embed);
    quotes_feed[t%2].innerHTML += embed;
  }
}

fetch("https://docs.google.com/spreadsheets/d/1G1O8-CIhHx_JBrHfHpeEldaMWUTmQ2YjvFAhXrrv_Yc/gviz/tq?tqx=out:json&sheet=Team")
  .then(response => response.text())
  .then(response => JSON.parse(strip(response)))
  .then(data => data["table"]["rows"])
  .then(data => insert_quotes(data))
