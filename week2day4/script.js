// //var ps=document.querySelectorAll('p')
// for(var i =0;i<ps.length;i++){
//     ps[i].style.backgroundColor ='red'
//     //ps[1].style.backgroundColor ='red'
//     ps[1].innerHtml='<a href="#">go home</a>
// }



// var ps=document.querySelectorAll('.container > .fb')
// newstr='';
// for (var i = 0; i < people.length;i++){
//     newstr += 'a href="#">go ' +people[i].name'</a> or at least not here'
// }
// ps[1].innerhtml=newstr



//API
var poki;
async function getPoki(){
    var res= await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    var data = await res.json();
    poki=data.results;
    
}

function addpoki(){
    newstr='<ul>';
    for (var i =0;i<poki.length;i++){

for (var i = 0; i < people.length;i++){
    newstr += '<li>' + poki[i].name + '</li>?'
}
ps[1].innerhtml=newstr + '<ul>'

}
}
var blast;
async function showblast(){
    console.log(poki[8]);
    var res= await fetch(poki[8].url)
    var data = await res.json();
    blast=data.results;
    console.log(blast);
}