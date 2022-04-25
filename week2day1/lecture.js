function vroom(){
    //code
}

var vroom2=function(){
    console.log('vroooooom1')
    console.log(this.age)
}

var billy=
    {'age':17,
    'isrunning':false,
    'start':function(str){
    console.log('billy is starting',str)
    this.running =true;
    console.log(this.age)
    }
}

var joe ={
    'start':vroom2,
    'age':28,
    'colors':['red','green','yellow'],
    'bestie':billy
}

console.log(joe.bestie.age)

console.log(joe.colors[1])


billy.start('this is the start argument')
joe.start()

console.log(billy.age,joe['age'])
//.notation vs array notation 



//this
//it is the element that calls the function

function clicked(){
    console.log('was clicked')
    var h1 = document.querySelector('h1');
    h1.style.backgroundColor = 'red';
    h1.onmouseover=function(){
        h1.style.backgroundColor='green'
    }
    h1.onmouseout=function(){
        h1.style.backgroundColor='yellow'
    }
}

class.innerText='jfsdakljfsalkdjtals'




