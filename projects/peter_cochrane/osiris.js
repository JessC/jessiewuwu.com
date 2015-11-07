$( document ).ready(function() {

  $('.panel').hover(function(){
    var img_id = $(this).attr("data-id");
    $('.big-wrap').attr("id", img_id);
    console.log(img_id);
  })


  $('.thumbnail').click(function(){
      $('.modal-body').empty();
      $($(this).parents('div').html()).appendTo('.modal-body');
      $('#myModal').modal({show:true});
  });

$('#myModal').on('click', function(){
  $('.modal').removeClass('fade');
  $('#myModal').modal('hide');
})

});







