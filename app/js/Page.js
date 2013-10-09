$(document).ready(function() {

    Solve = function(input) {
        validator = new Validator();
        coinsorter = new CoinSorter();
        inputvalid = validator.validate_topence(input);
        if(typeof inputvalid === "string") {
            return {error:true, message:inputvalid};
        }
        solution = coinsorter.solve(inputvalid);
        return solution;
    };
    
    $("#coinsorter").submit(function(event) {
       if(!$("#results").hasClass("hidden")) {
           $("#results").addClass("hidden");
       }
       if($("#results").hasClass("panel")) {
           $("#results").removeClass("panel");
       }
       if($("#results").hasClass("panel-danger")) {
              $("#results").removeClass("panel-danger");
       }
       if($("#results").hasClass("panel-success")) {
              $("#results").removeClass("panel-success");
       }    
       input = $("#amount").val();
       solution = Solve(input);
       if (solution.error) {
           $("#results").html("<div class=\"panel-heading\">Error:</div><div class=\"panel-body\"><p>" + solution.message + "</p></div>");
           $("#results").addClass("panel panel-danger");
       } else {
           table = "<table><tr><td>Coin Type</td><td>No. Coins</td></tr>";
           for (var i = 0; i < solution.length; i++) {
               table = table + "<tr><td>" + solution[i].cointype + "</td><td>" + solution[i].numcoins + "</td></tr>";
           }
           table = table + "</table>";
           $("#results").html("<div class=\"panel-heading\">Solution:</div><div class=\"panel-body\">" + table + "</div>");
           $("#results").addClass("panel panel-success");
       }
       $("#results").removeClass("hidden");
       event.preventDefault();
    });

});