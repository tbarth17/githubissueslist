$(function() {



function renderTemplate(templateId, container, model){
  var templateString = $('#' + templateId).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(model);
  $(container).append(renderedTemplate);
}


setInterval(function() {
  $("ul").empty();
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
}, 10000)

setInterval(function() {
  $("div").empty();
$(document).on('click', '.issuesListItem', function() {
      var commentContent = "Comment test content";
      $.ajax( {
        type: 'GET',
        url: $(this).attr('data-id')
      }).done(function(commentData) {
          console.log(commentData);
          _.each(commentData, function(i){

        renderTemplate('commentListTemplate', '.commentBox', i);

      })


      });
})

}, 10000)
});
