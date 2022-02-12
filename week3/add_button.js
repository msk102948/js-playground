var readInput = function(){
  var input = document.getElementById('input1');
  console.log(input.value);
};
var btn2 = document.createElement('button');
btn2.innerHTML = "button2";
btn2.onclick = readInput;
var test = document.getElementById('test');
test.appendChild(document.createElement('br'));
test.appendChild(btn2);

//모르겟다진지ㅏ
//브랜치너무어렵다싀방