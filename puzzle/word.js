
 // html elements
    let word1 = document.getElementById('word1'); // answer
    let word2 = document.getElementById('word2'); // buttons
    let check = document.getElementById('check'); // word1 == word2
    let progress = document.getElementById('progress'); // progress check

    //game objects
    let game = {
      'btns' : [],
      'max_play' : 3,
      'current' : 0
    };

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

    game.removeBtns = function(){
      for(let i = 0; i < this.btns.length; i++){
        word2.removeChild(this.btns[i]);
      }
      this.btns = [];
    }
    
    game.isCorrect = function(){
      return this.answer === this.letters.join('');
    }

    game.updateDisplay = function(){
      if(this.isCorrect()){
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

    game.swap = function(){
      let temp = [];
      while(this.letters.length !=0){
        let s = this.letters.pop();
        temp.push(s);
      }
      
      this.letters = temp;
      this.copyBtnText();
      this.updateDisplay();
    }
    
    game.rShift = function(){
      let s = this.letters.pop();
      this.letters.unshift(s);
      
      this.copyBtnText();
      this.updateDisplay();
    }
    
    game.lShift = function(){
      let s = this.letters.shift();
      this.letters.push(s);
      
      this.copyBtnText();
      this.updateDisplay();
    }

    game.progress = function(){
      if(this.isCorrect()){
        this.current++;
        this.removeBtns();
        this.init();
        this.shuffle();
        let str = "";
        for(let i  = 0; i < game.current; i++){
          str += "O";
        }
        progress.innerHTML = str;
      }
      if(this.current == this.max_play){
        alert("Good! Thank you for playing!");
      }
    };

// event handler for button
    let swap = function(){
      game.swap();
      game.progress();
    }
    
    let rShift = function(){
      game.rShift();
      game.progress();
    }
    
    let lShift = function(){
      game.lShift();
      game.progress();
    }

    //shuffle
    game.shuffle = function(){

      let toggle = Math.floor(Math.random() * 2) == 0;
      
      if(toggle){
        game.swap();
      }
  
      let n = Math.floor(Math.random()*(game.letters.length -1)) ;
      for(let i =0; i<n; i++){
        game.rShift();
      }
    };
    game.shuffle();