
//zadanie b

//let a = Symbol();
//let b = 1;
//let c = 'hello';
//let d = null;
//let e = true;
//let f = {};
//let value =d;
//if(typeof(value) === 'object'){
//    console.log(typeof(value));
//} else{alert(typeof(value));};
let value = function(a){
    if(typeof(a) === 'object'){
           console.log(typeof(a));
        } else{alert(typeof(a));};
      return;
}
let a = function(){};
value(a);



//zadanie c
let age = Number(prompt("Укажите сво возраст"));
let minor = 'Вы несовершеннолетний!';
let adult = 'Вы совершеннолетний!';
if(age < 18){
   alert("поздравляем," + ' вам' + ' ' +age + ' '+ "полных лет");
    alert (minor);
} else{
    alert("поздравляем," + ' вам' + ' ' +age + ' '+ "полных лет");
 alert(adult);
};

