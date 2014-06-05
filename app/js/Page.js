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
           var tmpl_string = $("#error").html();
           var template = Handlebars.compile(tmpl_string);
           rendered_html = template(solution);
           $("#results").html(rendered_html);
           $("#results").addClass("panel panel-danger");
       } else {
           var tmpl_string = $("#solutiontable").html();
           var template = Handlebars.compile(tmpl_string);
           rendered_html = template(solution);
           $("#results").html(rendered_html);
           $("#results").addClass("panel panel-success");
       }
       $("#results").removeClass("hidden");
       event.preventDefault();
    });

});