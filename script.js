function getRndInteger(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}
function getValues(){
  var maxNum = $('#max').val();
  var minNum = $('#min').val();
  var values=[maxNum,minNum];
  return values;
}
$(document).ready(function(){
  $('button[name="roll"]').click(function(){
    var range = getValues();
    console.log("Max: " + range[0] + "\nMin:" + range[1]);
    if(range[0]<0 || range[1]<0){
      $('#number').text('No negative numbers please!');
      return;
    } 
    if(range[1]>=range[0] && !(range[1]<10)){
      $('#number').text('Max must be greater than min!');
      return;
    } 
     $('#number').text('You rolled a '+getRndInteger(range[1], range[0])+'.');
  });
});

