var update = function() {
    var inputStr = document.getElementById("input").value;
    var vowelStr;
  
  function removeVowels(str) {
    return str.replace(/[aeiou]/ig, '')
  }
  
    if (inputStr == "") {
      vowelStr = "Remove Vowels";
    } else {
      vowelStr = removeVowels(inputStr)
    }
  
    document.getElementById("vowelStr").innerHTML = vowelStr;
}

document.addEventListener("keyup", update);
