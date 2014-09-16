$(function() {

function renderTemplate(templateId, container, model){
  var templateString = $('#' + templateId).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(model);
  $(container).append(renderedTemplate);
}



$.ajax( {
   type: "GET",
dataType: 'json',
   url: "https://api.github.com/issues",
   success: function(data){
     _.each(data, function(issue){
       var renderVars = {
         title: issue.title,
         }
         console.log(renderVars);
   renderTemplate('issueListTemplate', '.issueListContainer', renderVars);
     })

   },
    error: function() {
      alert("Error loading issues api")
    }
   })



$(document).on('click', '.issuesListItem', function() {
      var commentContent = "Comment test content";
      console.log(commentContent);
})


});
