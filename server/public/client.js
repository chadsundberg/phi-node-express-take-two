console.log('sourced!');
$(document).ready(function() {
  getFishData();
  function getFishData() {
  $.ajax({
    type:'GET',
    url: '/fish',
    success: function(response) {
      console.log('response', response);
      // we are about to loop through our fishies array and add it to the document
      $('#fishTank').empty();
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
}

  $('#newFishButton').on('click', function(){
    var newFishObject = {};
    newFishObject.name = $('#newFishName').val();  // we are getting an input so we need .val()
    $.ajax({
      type: 'POST',
      url: '/fish/new',
      data: newFishObject, // jquery expects this data property to be an object
      success: function(response){
        console.log(response);
        getFishData();
      }
    });
  });
});
