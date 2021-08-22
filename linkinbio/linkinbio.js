var insert_linkinbio = (data) => {
  var feed = document.getElementById("linkinbio_links");

  for(var t = 0; t < data.length; t++){
    var row = data[t];

    var content = row["c"];
    
    feed.innerHTML += '<a href="' + content[1]['v'] + '"><button class="button linkinbio">' + content[0]['v'] + '</button></a>';
  }
}

fetch("https://docs.google.com/spreadsheets/d/1QLjapJmsyUcygN7JoAC_MMdCo-mveIFDrmN9tiSXRIM/gviz/tq?tqx=out:json&sheet=Sheet1")
  .then(response => response.text())
  .then(response => JSON.parse(strip(response)))
  .then(data => data["table"]["rows"])
  .then(data => insert_linkinbio(data))