// This is the business (or back-end) logic:

// Everything below this line is the user interface (or front-end) logic:
$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputDescription = $("input#description").val();
    var inputDate = $("input#date").val();
    var inputStart = $("input#start").val();
    var inputEnd = $("input#end").val();

    $(".name").text(inputName);
    $(".description").text(inputDescription);
    $(".date").text(inputDate);
    $(".start").text(inputStart);
    $(".end").text(inputEnd);

    $("#confirmation").show();
  });
});
