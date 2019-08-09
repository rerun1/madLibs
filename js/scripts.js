var resetForm = function(input){
    $("input").val("");
}

$(document).ready (function(){

  $("form#formOne").submit(function(event){
    var userInput = "";
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("."+ blank).text(userInput);
    });

    $("#story").show();
    $("form#formOne").hide();
    $("h1#intro").hide();

    resetForm($("form#formOne"));

    event.preventDefault();

  });

  $("button#makeAnother").click(function(){
    $("#story").hide();
    $("form#formOne").show();
    $("h1#intro").show();
  });


});
