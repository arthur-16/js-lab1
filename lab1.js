document.addEventListener("DOMContentLoaded", function() {
  var btn = document.createElement("button")
  var btnText = document.createTextNode("Sing!")
  btn.appendChild(btnText)
  document.body.appendChild(btn)
  var steveDiv = document.createElement("div");
  var jamesDiv = document.createElement("div");
  var gregDiv = document.createElement("div");
  var leeDiv = document.createElement("div");
  var philDiv = document.createElement("div");
  steveDiv.classList.add("friend");
  jamesDiv.classList.add("friend");
  gregDiv.classList.add("friend");
  leeDiv.classList.add("friend");
  philDiv.classList.add("friend");
  var steveDivText = document.createTextNode("Steve");
  var jamesDivText = document.createTextNode("James");
  var gregDivText = document.createTextNode("Greg");
  var leeDivText = document.createTextNode("Lee");
  var philDivText = document.createTextNode("Phil");
  var steveH3 = document.createElement("h3");
  var jamesH3 = document.createElement("h3");
  var gregH3 = document.createElement("h3");
  var leeH3 = document.createElement("h3");
  var philH3 = document.createElement("h3");
  steveH3.appendChild(steveDivText);
  jamesH3.appendChild(jamesDivText);
  gregH3.appendChild(gregDivText);
  leeH3.appendChild(leeDivText);
  philH3.appendChild(philDivText);
  steveDiv.appendChild(steveH3);
  jamesDiv.appendChild(jamesH3);
  gregDiv.appendChild(gregH3);
  leeDiv.appendChild(leeH3);
  philDiv.appendChild(philH3);
  var steveLyric;
  var jamesLyric = document.createElement("p")
  var gregLyric = document.createElement("p")
  var leeLyric = document.createElement("p")
  var philLyric = document.createElement("p")

  jamesDiv.appendChild(jamesLyric)
  gregDiv.appendChild(gregLyric)
  leeDiv.appendChild(leeLyric)
  philDiv.appendChild(philLyric)
  document.body.appendChild(steveDiv)






  let p1 = ["Steve"];
      btn.addEventListener("click", function() {
    for (var i = 0; i < p1.length; i++) {
      for (var j = 99; j > 0; j--) {
        let steveLyric = document.createElement("p")
        steveDiv.appendChild(steveLyric)
        if (j > 2) {
          steveLyric.innerText = (
            j +
              " lines of code in the file, " +
              j +
              " lines of code; " +
              "Steve" +
              " strikes one out, clears it all out, " +
              (j - 1) +
              " lines of code in the file "
          );
        } else if (j === 2) {
          steveLyric.innerText = (
            j +
              " lines of code in the file, " +
              j +
              " lines of code; " +
             "Steve" +
              " strikes me out, clears it all out, " +
              (j - 1) +
              " line of code in the file "
          );
        } else {
          steveLyric.innerText = (
            " 1 line of code in the file, 1 line of code; " +
              "Steve" +
              " strikes one out, clears it all out, no more lines of code in the file "
          );
        }
      }
    }
  });
});
