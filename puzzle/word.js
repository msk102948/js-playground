
    // let str = document.getElementById('word1').innerHTML;
    let word1 = document.getElementById('word1');
    let word2 = document.getElementById('word2');
    let check = document.getElementById('check');

    let words = 'apple,linux,javascript,tutorial,baby,girlfriend,legend'.split(','); 

    let game = {};
    game.choice = function(){
      let idx = Math.floor(Math.random() * words.length);
      return words[idx]; 
    }
    let str = game.choice();
    word1.innerHTML = str;

    game.word = str.split('');
    game.btns = [];
    game.copyBtnText = function(arr, btn){
      for(let i = 0; i <this.word.length; i++){
        this.btns[i].innerHTML = this.word[i];
      }
    }
    game.updateDisplay = function(){
      console.log(game.answer);
      console.log(game.word.join());
      if(game.answer == game.word.join('')){
        check.innerHTML = '일치합니다.';
      }else{
        check.innerHTML = '일치하지 않습니다.';

      }
    }


    for(let i = 0; i <str.length; i++){
      let btn = document.createElement('button');
      btn.innerHTML = str[i];
      word2.appendChild(btn);
      game.btns.push(btn);
    }

    let swap = function(){
      let temp = [];
      while(game.word.length !=0){
        let s = game.word.pop();
        temp.push(s);
      }

      game.word = temp;
      game.copyBtnText();
      game.updateDisplay();
    }


    let rShift = function(){
      let s = game.word.pop();
      game.word.unshift(s);

      game.copyBtnText();
      game.updateDisplay();
    }
    
    let lShift = function(){
      let s = game.word.shift();
      game.word.push(s);
      
      game.copyBtnText();
      game.updateDisplay();
    }

    //shuffle
    let toggle = Math.floor(Math.random() * 2) == 0;
    
    if(toggle){
      swap();
    }

    let n = Math.floor(Math.random()*str.length);
    for(let i =0; i<n; i++){
      rShift();
    }