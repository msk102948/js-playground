
 // html elements
    let word1 = document.getElementById('word1'); // answer
    let word2 = document.getElementById('word2'); // buttons
    let check = document.getElementById('check'); // word1 == word2

    //game objects
    let game = {'btns' : []};
    game.words = 'apple,linux,javascript,tutorial,baby,girlfriend,legend'.split(','); 

    //choose 1 word from words;
    game.choose = function(){
      let idx = Math.floor(Math.random() * this.words.length);
      this.answer = this.words[idx]; 
      this.letters = this.answer.split('');
      word1.innerHTML = this.answer;

    };
    
    game.addBtns = function(){
      for(let i = 0; i < this.letters.length; i++){
        let btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
      }
    }
    
    game.updateDisplay = function(){
      let gameStr = this.letters.join('');
      if(this.answer == gameStr){
        check.innerHTML = '일치합니다.';
      }else{
        check.innerHTML = '일치하지 않습니다.';

      }
    }
    
    game.init = function(){
      this.choose();
      this.addBtns();
      this.updateDisplay();
    };

    game.init();



    game.copyBtnText = function(){
      for(let i = 0; i <this.letters.length; i++){
        this.btns[i].innerHTML = this.letters[i];
      }
    }


// event handler
    let swap = function(){
      let temp = [];
      while(game.letters.length !=0){
        let s = game.letters.pop();
        temp.push(s);
      }

      game.letters = temp;
      game.copyBtnText();
      game.updateDisplay();
    }


    let rShift = function(){
      let s = game.letters.pop();
      game.letters.unshift(s);

      game.copyBtnText();
      game.updateDisplay();
    }
    
    let lShift = function(){
      let s = game.letters.shift();
      game.letters.push(s);
      
      game.copyBtnText();
      game.updateDisplay();
    }

    //shuffle
    game.shuffle = function(){

      let toggle = Math.floor(Math.random() * 2) == 0;
      
      if(toggle){
        swap();
      }
  
      let n = Math.floor(Math.random()*game.letters.length);
      for(let i =0; i<n; i++){
        rShift();
      }
    };
    game.shuffle();