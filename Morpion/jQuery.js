
j1 = "Joueur 1"
j2 = "Joueur 2"

$(document).ready(function(){
  $("#player").toggle();
});


$(document).ready(function(){
  $("#new").click(function(){
    $("#mode").toggle(1000, function(){
      $("#player").toggle(1000);
    });
    
  });
});

$(document).ready(function(){
  $("#resume").click(function(){
    $("#mode").toggle(1000);
  });

    $("#submit").click(function(){
      if($("input[name=J1]").val().length > 4 &&  $("input[name=J1]").val().length > 4){
      $("#player").toggle(1000);
      }
      else if($("input[name=J1]").val().length > 4){
        j1 = $("input[name=J1]").val();
      }
      else if($("input[name=J1]").val().length > 4){
        j2 = $("input[name=J1]").val().to_string();
      }

      
    });
});
