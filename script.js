function getRndInteger(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function(){
  $('button[name="roll"]').click(function(){
    var maxNum = parseInt($('#max').val());
    var minNum = parseInt($('#min').val());
    if(maxNum<0 || minNum<0){
      $('#number').text('No negative numbers please!');
      return;
    } 
    if(minNum >= maxNum){
      $('#number').text('Max must be greater than min!');
      return;
    } 
     $('#number').text('You rolled a(n) '+getRndInteger(minNum, maxNum)+'.');
  });
});

