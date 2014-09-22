$(function() {



function renderTemplate(templateId, container, model){
  var templateString = $('#' + templateId).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(model);
  $(container).append(renderedTemplate);
}


setInterval(function() {
  $("ul li").remove();
$.ajax( {
   type: "GET",
dataType: 'json',
   url: "https://api.github.com/issues",
   success: function(data){
     _.each(data, function(issue){
   renderTemplate('issueListTemplate', '.issueListContainer', issue);

     })

   },
    error: function() {
      alert("Error loading issues api")
    }
   })
}, 3000);

setInterval(function() {
  $("div").empty();
$(document).on('click', '.issuesListItem', function() {
      $.ajax( {
        type: 'GET',
        url: $(this).attr('id')
      }).done(function(commentData) {
          console.log(commentData);
          _.each(commentData, function(i){

        renderTemplate('commentListTemplate', '.commentBox', i);

      })


      });
})

}, 10000);
});

var token = '7237f31b7c5322d291df3961ae34c297f28c6c1b';

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
