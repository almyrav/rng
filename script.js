function getRndInteger(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}
$(document).ready(function(){
  var randNum;
  $('button[name="roll"]').click(function(){
    var maxNum = $('#max').val();
    var minNum = $('#min').val();
    if(maxNum<0 || minNum<0){
      $('#number').text('No negative numbers please!');
    }
    if(minNum>maxNum){
      $('#number').text('Max must be greater than min!');
    }
    $('#number').text('You rolled a '+getRndInteger(minNum, maxNum)+'.');
  });
});

