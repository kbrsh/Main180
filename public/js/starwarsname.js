var update = function() {
    var inputStr = document.getElementById("input").value;
    var vowelStr;
  
  function removeVowels(str) {
    var fullName = str.split(" ");
    var firstName = fullName[0]
    var lastName = fullName[1]
    var firstStar = firstName.substring(0, 3)
    var lastStar = lastName.substring(0, 3)
    
    var starWarsName = lastStar + firstStar
    return starWarsName
  }
  
    if (inputStr == "") {
      vowelStr = "Star Wars Name Generator";
    } else {
      vowelStr = removeVowels(inputStr)
    }
  
    document.getElementById("vowelStr").innerHTML = vowelStr;
}

document.addEventListener("keyup", update);
