console.log('sourced!');
$(document).ready(function() {
  $.ajax({
    type:'GET',
    url: '/fish',
    success: function(response) {
      console.log('response', response);
      // we are about to loop through our fishies array and add it to the document

for (var i = 0; i < response.length; i++) {
  $('#fishTank').append('<li>' + response[i].name + '</li>');
}
}
});


$.ajax({
  type:'GET',
  url: '/fish/first/name',
  success: function(response) {
    console.log('response', response);
    $('#firstFishy').text(response);
  }
});
});
