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
      $("#Python, #Ruby").hide();
      $("#Javascript").show();
    } else if (ways === "manyWays") {
      language = "Ruby";
      $("#Javascript, #Python").hide();
      $("#Ruby").show();
    } else if (end === "Back" && ways ==="oneWay") {
      language = "Python";
      $("#Javascript, #Ruby").hide();
      $("#Python").show();
    } else if (speed === "Fast" && end != "Back") {
      language = "Javascript";
      $("#Python, #Ruby").hide();
      $("#Javascript").show();
    } else {
      language = "Python";
      $("#Javascript, #Ruby").hide();
      $("#Python").show();
    }

    $("#language").text(language);
    $("#match").show(); 
    $("#languageChoice").hide();
    $("h6").hide();
    
    event.preventDefault();
  });
}); 