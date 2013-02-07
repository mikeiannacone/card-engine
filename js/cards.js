//TODO load from json file
var cards = {
  "club_10"    :{"path":"200px-Playing_card_club_10.svg.png","suit":"club","val":10},
  "club_2"     :{"path":"200px-Playing_card_club_2.svg.png", "suit":"club","val":2},
  "club_3"     :{"path":"200px-Playing_card_club_3.svg.png", "suit":"club","val":3},
  "club_4"     :{"path":"200px-Playing_card_club_4.svg.png", "suit":"club","val":4},
  "club_5"     :{"path":"200px-Playing_card_club_5.svg.png", "suit":"club","val":5},
  "club_6"     :{"path":"200px-Playing_card_club_6.svg.png", "suit":"club","val":6},
  "club_7"     :{"path":"200px-Playing_card_club_7.svg.png", "suit":"club","val":7},
  "club_8"     :{"path":"200px-Playing_card_club_8.svg.png", "suit":"club","val":8},
  "club_9"     :{"path":"200px-Playing_card_club_9.svg.png", "suit":"club","val":9},
  "club_A"     :{"path":"200px-Playing_card_club_A.svg.png", "suit":"club","val":1},
  "club_J"     :{"path":"200px-Playing_card_club_J.svg.png", "suit":"club","val":11},
  "club_K"     :{"path":"200px-Playing_card_club_K.svg.png", "suit":"club","val":13},
  "club_Q"     :{"path":"200px-Playing_card_club_Q.svg.png", "suit":"club","val":12},
  "diamond_10" :{"path":"200px-Playing_card_diamond_10.svg.png","suit":"diamond","val":10},
  "diamond_2"  :{"path":"200px-Playing_card_diamond_2.svg.png", "suit":"diamond","val":9},
  "diamond_3"  :{"path":"200px-Playing_card_diamond_3.svg.png", "suit":"diamond","val":8},
  "diamond_4"  :{"path":"200px-Playing_card_diamond_4.svg.png", "suit":"diamond","val":7},
  "diamond_5"  :{"path":"200px-Playing_card_diamond_5.svg.png", "suit":"diamond","val":6},
  "diamond_6"  :{"path":"200px-Playing_card_diamond_6.svg.png", "suit":"diamond","val":5},
  "diamond_7"  :{"path":"200px-Playing_card_diamond_7.svg.png", "suit":"diamond","val":4},
  "diamond_8"  :{"path":"200px-Playing_card_diamond_8.svg.png", "suit":"diamond","val":3},
  "diamond_9"  :{"path":"200px-Playing_card_diamond_9.svg.png", "suit":"diamond","val":2},
  "diamond_A"  :{"path":"200px-Playing_card_diamond_A.svg.png", "suit":"diamond","val":1},
  "diamond_J"  :{"path":"200px-Playing_card_diamond_J.svg.png", "suit":"diamond","val":11},
  "diamond_K"  :{"path":"200px-Playing_card_diamond_K.svg.png", "suit":"diamond","val":13},
  "diamond_Q"  :{"path":"200px-Playing_card_diamond_Q.svg.png", "suit":"diamond","val":12},
  "heart_10"   :{"path":"200px-Playing_card_heart_10.svg.png","suit":"heart","val":10},
  "heart_2"    :{"path":"200px-Playing_card_heart_2.svg.png", "suit":"heart","val":2},
  "heart_3"    :{"path":"200px-Playing_card_heart_3.svg.png", "suit":"heart","val":3},
  "heart_4"    :{"path":"200px-Playing_card_heart_4.svg.png", "suit":"heart","val":4},
  "heart_5"    :{"path":"200px-Playing_card_heart_5.svg.png", "suit":"heart","val":5},
  "heart_6"    :{"path":"200px-Playing_card_heart_6.svg.png", "suit":"heart","val":6},
  "heart_7"    :{"path":"200px-Playing_card_heart_7.svg.png", "suit":"heart","val":7},
  "heart_8"    :{"path":"200px-Playing_card_heart_8.svg.png", "suit":"heart","val":8},
  "heart_9"    :{"path":"200px-Playing_card_heart_9.svg.png", "suit":"heart","val":9},
  "heart_A"    :{"path":"200px-Playing_card_heart_A.svg.png", "suit":"heart","val":1},
  "heart_J"    :{"path":"200px-Playing_card_heart_J.svg.png", "suit":"heart","val":11},
  "heart_K"    :{"path":"200px-Playing_card_heart_K.svg.png", "suit":"heart","val":13},
  "heart_Q"    :{"path":"200px-Playing_card_heart_Q.svg.png", "suit":"heart","val":12},
  "spade_10"   :{"path":"200px-Playing_card_spade_10.svg.png","suit":"spade","val":10},
  "spade_2"    :{"path":"200px-Playing_card_spade_2.svg.png", "suit":"spade","val":2},
  "spade_3"    :{"path":"200px-Playing_card_spade_3.svg.png", "suit":"spade","val":3},
  "spade_4"    :{"path":"200px-Playing_card_spade_4.svg.png", "suit":"spade","val":4},
  "spade_5"    :{"path":"200px-Playing_card_spade_5.svg.png", "suit":"spade","val":5},
  "spade_6"    :{"path":"200px-Playing_card_spade_6.svg.png", "suit":"spade","val":6},
  "spade_7"    :{"path":"200px-Playing_card_spade_7.svg.png", "suit":"spade","val":7},
  "spade_8"    :{"path":"200px-Playing_card_spade_8.svg.png", "suit":"spade","val":8},
  "spade_9"    :{"path":"200px-Playing_card_spade_9.svg.png", "suit":"spade","val":9},
  "spade_A"    :{"path":"200px-Playing_card_spade_A.svg.png", "suit":"spade","val":1},
  "spade_J"    :{"path":"200px-Playing_card_spade_J.svg.png", "suit":"spade","val":11},
  "spade_K"    :{"path":"200px-Playing_card_spade_K.svg.png", "suit":"spade","val":13},
  "spade_Q"    :{"path":"200px-Playing_card_spade_Q.svg.png", "suit":"spade","val":12},
}

var debug = false;

//print debug message as appropriate
if (Modernizr.draganddrop) {
  // Browser supports HTML5 DnD.
  if(debug) console.log("browser supports DnD - yay!");
} else {
  //TODO Fallback to a library solution.
  if(debug) console.log("browser does not support DnD - oh no!");
}

// Using this polyfill for safety.
//TODO uh, what?
Element.prototype.hasClassName = function(name) {
  return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function(name) {
  if (!this.hasClassName(name)) {
    this.className = this.className ? [this.className, name].join(' ') : name;
  }
};

Element.prototype.removeClassName = function(name) {
  if (this.hasClassName(name)) {
    var c = this.className;
    this.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
  }
};

var deck = Object.keys(cards);;

//Utility functions
var isGhosted = function(col){
  var img = col.querySelector("img")
  return img.hasClassName('ghost');
};

//TODO write real fn
var deal = function(){
  var cols_ = $(".card-back");
  var img;
  var i;
  var randomNum;
  for(i=0; i<cols_.length; i++){
    img = cols_[i].querySelector("img");
    if( isGhosted(cols_[i]) ){
      img.setAttribute('src', "images/card-back-small.jpg" );
    }else{
      randomNum = Math.floor(Math.random() * deck.length);
      img.setAttribute('src', 'images/cards/' + cards[deck[randomNum]].path );
      deck.splice(randomNum, 1);
    }
    img.setAttribute('height', 90);
    img.setAttribute('width', 68);
  }
};

/*
$.ajax({
  url: 'js/cards.json',
  dataType: 'json'
}).done(function(data) {
  cards = data;
  deal();
});
*/

//Set up all your stuff
(function() {
  var cols_ = $(".column");
  var dragSrcEl_ = null; //seems kinda hacky, looking back on this.

  this.handleDragStart = function(e) {
    dragSrcEl_ = this;
    if( isGhosted(this) ){
      e.dataTransfer.effectAllowed = 'none';
      //TODO messing around with the drag icon, can't get it to change for some reason
      /*
      var dragIcon = document.createElement('img');
      //dragIcon.src = 'http://www.html5rocks.com/static/images/google_logo_small.png';
      dragIcon.src = 'images/cards/ace-spades.png';
      e.dataTransfer.setDragImage(dragIcon, -10, -10);
      */
    }else{
      this.addClassName('moving');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  };

  this.handleDragOver = function(e) {
    if(debug) console.log('handleDragOver')
    //if (e.preventDefault) {
      e.preventDefault(); // Allows us to drop.
    //}

    if( ! isGhosted(dragSrcEl_) ){
      e.dataTransfer.dropEffect = 'move';
      this.addClassName('over');
    }
    //return false;
  };

  this.handleDragEnter = function(e) {
    if(debug) console.log('handleDragEnter')
    e.preventDefault(); // Allows us to drop.
    if( ! isGhosted(dragSrcEl_)){
      this.addClassName('over');
    }
    //return false;
  };

  this.handleDragLeave = function(e) {
    // this/e.target is previous target element.
    if(debug) console.log('handleDragLeave')
    this.removeClassName('over');
    //return false;
  };

  this.handleDrop = function(e) {
    if(debug) console.log("handleDrop")
    // this/e.target is current target element.

    //e.stopPropagation(); // stops the browser from redirecting.

    // Don't do anything if we're dropping on the same column we're dragging.
    if (dragSrcEl_ != this && ! isGhosted(dragSrcEl_) ) {
      dragSrcEl_.removeClassName('over');
      dragSrcEl_.removeClassName('moving');
      this.removeClassName('over');
      this.removeClassName('moving');

      dragSrcEl_.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }

    //return false;
  };

  // NB: only runs when the card is dropped back on its orig. spot.
  // TODO: I assume the above is standard behavior, but have only tested in chrome.
  this.handleDragEnd = function(e) {
    if(debug) console.log("handleDragEnd");
    dragSrcEl_.removeClassName('over');
    dragSrcEl_.removeClassName('moving');
    // this/e.target is the source node.
    /* //below was for debugging: hopefully don't really need to reset all spaces like that.
    [].forEach.call(cols_, function (col) {
      col.removeClassName('over');
      col.removeClassName('moving');
    });
    */
    //return false;
  };

  //init all your dudes, ghosted ones are handled exactly the same here now
  [].forEach.call(cols_, function (col) {
    col.setAttribute('draggable', 'true');  // Enable columns to be draggable.
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
  });

  deal();

})();
