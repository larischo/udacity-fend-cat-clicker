let count_1=0;
let count_2=0;
$('#cats_1').click(function(e) {
    $('#click_1')[0].innerHTML="clicks: "+ ++count_1;
  });
  $('#cats_2').click(function(e) {
    $('#click_2')[0].innerHTML="clicks: "+ ++count_2;
  });