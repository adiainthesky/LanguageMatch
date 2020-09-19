$(document).ready(function() {
  $("form#languageChoice").submit(function(event) {  
  
   
    const end = $("select#end").val();
    const ease = $("select#ease").val();    
    const speed = $("select#speed").val();
    const ways = $("select#ways").val();
    const chocolate = $("select#chocolate").val();
    let language 

    if (end === "Front") {
      language = "Javascript";
    } else if (ways === "manyWays") {
      language = "Ruby";
    } else if (end === "Back" && ways ==="oneWay") {
      language = "Python";
    } else if (speed === "Fast" && end != "Back") {
      language = "Javascript";
    } else {
      language = "Python";
    }

    $("#language").text(language);
    $("#match").show(); 
    
    event.preventDefault();
  });
}); 