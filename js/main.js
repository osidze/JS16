console.log(String()); 
console.log(typeof(String()));

var browser = {
    one: 'Chrom',
    two: 'Mozilla',
    three: 'Safari',
        sayHi: function() {
            return 'Hello world!';
    }
}
console.log(browser.one);
console.log(browser.two);
console.log(browser.three);
console.log(browser.sayHi());

var i;
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

var CityName = 'Kiev',
    Status;
switch(CityName) {
    case 'Kharkov': Status = 'City'; break;
    case 'Andreevka': Status = 'Village'; break;
    case 'Bezlyudovka': Status = 'Township'; break;
    default: Status = 'somewhere in Ukraine';
}
console.log(CityName + ' ' + Status);

var x = 10;
var text = x > 10 ? 'x больше 10' : x < 10 ? 'x меньше 10' : 'x равен 10';
console.log(text);

var i = 0;
while (i <= 7) {
console.log(i++);
}


function myFunc (apr1, apr2, callback) { 
    console.log('Число' + apr1 + ', в степени' + apr2); 
    callback(); 
} 
var apr3 = 2**4;
   myFunc('2', '4', function() { 
    console.log('Рузельтат' + apr3); 

}); 
