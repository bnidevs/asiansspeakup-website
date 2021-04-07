var insert_linkinbio = (data) => {
  var feed = document.getElementById("linkinbio_links");

  for(var t = 0; t < data.length; t += 2){
    feed.innerHTML += '<a href="' + data[t]["content"]["$t"] + '"><button class="button linkinbio">' + data[t+1]["content"]["$t"] + '</button></a>';
  }
}

fetch("https://spreadsheets.google.com/feeds/cells/1QLjapJmsyUcygN7JoAC_MMdCo-mveIFDrmN9tiSXRIM/1/public/values?alt=json")
  .then(response => response.json())
  .then(data => data["feed"]["entry"])
  .then(data => insert_linkinbio(data))
