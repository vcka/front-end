$(function(){
// function aClick() {
//   $( "div" ).show().fadeOut( "slow" );
// }
// $( "#bind" ).click(function() {
//   $( "body" )
//     .delegate( "#theone", "click", aClick )
//     .find( "#theone" ).text( "Can Click!" );
// });
// $( "#unbind" ).click(function() {
//   $( "body" )
//     .undelegate( "#theone", "click", aClick )
//     .find( "#theone" ).text( "Does nothing..." );
// });
//
// $( "#bind" ).bind( "click", function() {
//   alert( "User clicked on 'foo.'" );
// });

$('button').click(function(e) {
    var selected = $(this).attr('class');
   alert('You clicked on button: ' + selected);
});

})
