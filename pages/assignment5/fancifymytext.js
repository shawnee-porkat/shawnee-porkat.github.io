
document.getElementById("biggerButton").addEventListener("click", () => {
    document.getElementById("userText").style.fontSize = "24pt";
  });

  document.getElementById("mooButton").addEventListener("click", () => {
    document.getElementById("userText").value = document.getElementById("userText").value.toUpperCase();
    var str = document.getElementById("userText").value;
    var parts = str.split("." || "!" || "?");  // ["How", "are", "you?"]
    str = parts.join("-MOO.");       // "How_are_you?"
    document.getElementById("userText").value = str;

  });

  function fancy(){
    document.getElementById("userText").style.fontWeight="bold";
    document.getElementById("userText").style.color="blue";
    document.getElementById("userText").style.textDecoration="underline";

  }
  function boring(){
    document.getElementById("userText").style.fontWeight="normal";
    document.getElementById("userText").style.color="black";
    document.getElementById("userText").style.textDecoration="none";
  }


