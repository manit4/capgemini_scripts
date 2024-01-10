// var value = 100;

// console.log("value")

// var value = 100;

// console.log( 'value' );


// var value = 100;

// console.log(value)

// var value;

// console.log( value )

// var value = 0;

// console.log( value )

// var value = 34.5454;

// console.log( value )

// var value = 34.5454;

// console.log( typeof value )

// var value = 0;

// console.log( typeof value )

// var value;

// console.log( typeof value )

// var value;
// console.log( typeof value )

// value = 56;
// console.log( typeof value )

// var value = "I am learning js";
// console.log( typeof value )

// value = 56;
// console.log( typeof value )



//console.log( value )   ----It gives me error since variable "value" is not defined and
// I am trying to access the variable "value". 

// console.log( value )---- this wont give you error even though I am trying to access the variable before declaring. The reason is, during exection it will look for the whole file
//and will take out all the variables and keep on top with undefined value... 
// var value = 5;

// console.log( value )
// var value = 67;

// console.log( value )

// var name1 = "Hafifa";
// var name2 = 'Manan';

// console.log( name1+ ' '+name2 )



// var name1 = `Hafifa
//                 is my name 
//                 and I work for Capgemini`;

// console.log( name1 )




// var name = 'Hafifa', company = 'Capgemini';

// var data = name+` works 
//             for `+company;

// console.log( data );




// var name1 = 'Hafifa', company = 'Capgemini';

// var data = `${name1} works 
//             for
//              ${company}`;

// console.log( data );




// var name1 = 'Hafifa', company = 'Capgemini';

// var data = 'I work for ${company}';

// console.log( data );



// console.log("first statement...");

// var age = 10;

// if ( age < 18 ) {

//     console.log( ' you are allowed ');
// }

// console.log(' last statement...')






// console.log("first statement...");

// var score = 70;

// if ( score > 85 ) {

//     console.log( ' I will buy yoy bike ');
// }
// else  {

//     console.log( 'I will buy you nothing' );
// }

// console.log(' last statement...')

// var value = 9;

// switch (value) {

//     default://we can have default anywhere in switch but is not recommended.so keep default
//             //case at the last...
//         console.log('inside dafault case...')
//         break;

//     case 1:
//         console.log("inside case 1...")
//         break;

//     case 2:
//         console.log("inside case 2...")
//         break;

//     case 3:
//         console.log("inside case 3...")
//         break;
// }



//var value = 'Sushmita';

// switch ('Sushmita') {

//     case 'Hafifa':
//         console.log("inside case Hafifa...")
//         break;

//     case 'Anees':
//         console.log("inside case Anees...")
//         break;

//     case 'Manan':
//         console.log("inside case Manan...")
//         break;

//     default:
//         console.log('inside dafault case...')
//         break;
// }

// var val = 10;

// while( val > 5 ) {

//     //val = val - 1;
//     val--;

//     console.log('keep-on working....'+val)
// }




// var val = 5;

// do {
    
//     console.log( 'inside do...',val )
//     val++;
// }while( val < 10 ); 

// var val1 = 10;

// var val2 = val1++;

// console.log( val1 )
// console.log( val2 )

// var val1 = 10;

// var val2 = ++val1;

// console.log( val1 )
// console.log( val2 )

// for( var i = 0; i <= 5; i++ ){

//     console.log( 'Going on..', i)
// }


// for( var i = 0, j = 10; i < j; i++, j--) {

//     console.log(' value of i is ', i, ' and the value of j is ', j);
// }



// var val = 10;

// if( val < 20) {

//     console.log( val )
// }



// var val1 = 10;
// var val2 = 20;

// if( val2 > val1 ) {
    
//     console.log( val1, val2 )
// }


// var val1 = 10;
// var val2 = 10;

// if( val2 == val1 ) {
    
//     console.log( val1, val2 )
// }


// var val1 = 10;
// var val2 = 10;

// console.log( val1 == val2 )




// var val1 = 10;
// var val2 = 10;

// var result = val1 == val2;

// console.log( result )




// var val1 = 10;
// var val2 = '10';

// var result = val1 == val2;

// console.log( result )



// var val1 = 10;
// var val2 = '10';

// var result = val1 === val2;

// console.log( result )


// var val1 = 10;
// var val2 = 10;

// var result = val1 === val2;

// console.log( result )




// var val1 = 10;
// var val2 = 10;

// var result = val1 != val2;

// console.log( result )







// var val1 = 10;
// var val2 = 10;

// if( val1 <= val2 ) {

//     console.log( 'inside' )
// }






// var val1 = 10;
// var val2 = 11;

// if( val1 >= val2 ) {

//     console.log( 'inside' )
// }


// var val1 = 10;
// var val2 = 11;

// if( val1 < 50 || val2 > 10 ) {

//     console.log('inside if...')
// }


// var val1 = 10;
// var val2 = 11;

// if( val1 < 50 || val2 < 10 ) {

//     console.log('inside if...')
// }

// var val1 = 10;
// var val2 = 11;

// if( val1 < 50 && val2 > 10 ) {

//     console.log('inside if...')
// }


// var val1 = 10;
// var val2 = 11;

// if( val1 > 50 && val2 > 10 ) {

//     console.log('inside if...')
// }






// var val1 = 10;
// var val2 = 11;

// if( val1 < 50 && val2 > 10 && val2 == 11 ) {

//     console.log('inside if...')
// }



// var val1 = 10;
// var val2 = 11;

// if( (val1 < 50 && val2 > 10) && (val2 == 10 || val2 > val1) ) {

//     console.log('inside if...')
// }











// var names = [
//     'Hafifa',
//     'Manan',
//     'FatimaSindhu'
// ]

// //console.log( names )//names here holding address of the location where all three names 
// //are located but it does not give you the address and returns you the content..

// console.log( names [0] );
// console.log( names [1] );
// console.log( names [2] );



// var names = [
//     'Hafifa',
//     'Manan',
//     'FatimaSindhu',
// ]

// console.log( names [0], names[1], names[2] );


// var names = [
//     'Hafifa',
//     'Manan',
//     'FatimaSindhu',
// ]

// console.log( names [0]);
// console.log( names[1]);
// console.log( names[2])
// console.log( names[3])



// var names = [
//     'Hafifa',
//     'Manan',
//     'FatimaSindhu',
// ]

// names[2] = names[2] + 'Geethika';

// console.log( names[2]);

// names[4] = 'Shreya';

// console.log( names )




// var names = [
//     'Hafifa',
//     'Manan',
//     'FatimaSindhu',
// ]

// console.log( names.length )



// var names = [
//     'Hafifa',
//     'Manan',
//     'FatimaSindhu',
//     'Varsha'
// ]

// for( var i = 0; i < names.length; i++ ){

//     console.log( names[i])
// }



// var data = [
//     ['Shivani', 'Bhagyashree', 'Shreya'],
//     ['Sharma', 'Verma', 'Roy'],
//     [34534, 6867,4545]
// ]

// console.log( data[0][0])

// data[2][1] = 57676756;

// console.log( data[2][1] )


// var data = [
//     ['Shivani', 'Bhagyashree', 'Shreya'],
//     ['Sharma', 'Verma', 'Roy'],
//     [34534, 6867,4545]
// ]

// for( var i = 0; i < 3; i++) {
    
//     for( var j = 0; j < 3; j++ ) {

//         console.log( data[i][j])
//     }
// }


// var data = [
//     'Shivani', 'Hafifa', 'Divya'
// ]

// data.sort();

// console.log(data)



// var data = [
//     53, 32, 9, 100
// ]

// data.sort();

// console.log(data)


// var data = [
//     53, 32, 9, 100
// ]

// data.reverse()

// console.log(data)



// var data = [
//     53, 32, 9, 100
// ]

// data.push( 34)

// console.log(data)




// var data = [
//     53, 32, 9, 100
// ]

// var deletedItem = data.pop()
// deletedItem = deletedItem + 50;

// console.log(deletedItem)
// console.log( data )



// function print() {

//     console.log( 'Hello')
// }

// print();



// function add() {

//     var firstNo = 10;
//     var secondNo = 20;

//     console.log( firstNo + secondNo )
// }

// add();

// function add() {

//     var firstNo = 10;
//     var secondNo = 20;

//     var result = firstNo + secondNo;

//     console.log( result )
// }




// function add() {

//     var firstNo = 10;
//     var secondNo = 20;

//     var result = firstNo + secondNo;

//     console.log( result )
// }




// function add( firstNo, secondNo) {

//    console.log( firstNo + secondNo )
// }

// add( 20, 43 )



// function add( firstNo, secondNo) {

//     console.log( firstNo, secondNo)
//  }
 
//  add( 20 )




// function add( firstNo, secondNo) {

//     console.log( firstNo, secondNo)
//  }
 
//  add( )



// function add( firstNo, secondNo) {

//     var result = firstNo + secondNo;

//     return result;
//  }
 
//  var returnedValue = add( 34, 32 )

//  console.log( returnedValue )




// function add( firstNo, secondNo) {

//     return firstNo + secondNo;
//  }
 
//  var returnedValue = add( 34, 32 )

//  console.log( returnedValue )





// function add( firstNo, secondNo) {

//     return firstNo + secondNo;
//  }
 
// console.log( add( 10, 20 ))




// var global_x = 20;//this is global variable whcih you can use it anywhere in your file..

// function display() {

//     console.log( global_x )//Here I am accessing the variable declred outside the method
//                             //since varibles declared outside the method are globally accessible and can be used from anywhere...
// }

//display();

// var global_x = 10;

// function display1() {

//     var local_1 = 20;

//     console.log( global_x );
//     console.log( local_1 )

// }

// function display2() {

//     var local_2 = 30;

//     console.log( global_x );
//     console.log( local_2 );

// }

// display1();
// display2();




// var global_x = 10;

// function display1() {

//     var local_1 = 20;

//     console.log( global_x );
//     console.log( local_1 )

// }

// function display2() {

//     var local_2 = 30;

//     console.log( global_x );
//     console.log ( local_1 );
//     console.log( local_2 );

// }

// display1();
// display2();




// function display() {

//     var local_x = 20;

//     for( var i = 0; i < 3; i++ ){

//         console.log( 'value of i inside for is ',i, 'and the value of ', local_x);
//     }

//     console.log( 'value of i outside for is ',i, 'and the value of ', local_x);

// }

// display();





// function display() {

//     var local_x = 20;

//     for( var i = 0; i < 3; i++ ){

//         console.log( 'value of i inside for is ',i, 'and the value of ', local_x);
//     }

//     console.log( 'value of i outside for is ',i, 'and the value of ', local_x);

// }

// display();


// function display() {

//     var local_x = 20;

//     for( let i = 0; i < 3; i++ ){

//         console.log( 'value of i inside for is ',i, 'and the value of ', local_x);
//     }

//     console.log( 'value of i outside for is ',i, 'and the value of ', local_x);

// }




// let global_x = 10;

// function display() {

//     let local_x = 20;

//     if( local_x > global_x ) {

//         let block_x = 30;

//         console.log('inside if...', block_x)
//     }

//     console.log(block_x)
// }




// display();


//const val;//it is an error since const variable needs to be assigned with some value and you can not change in //future...


// const val = 34;

// val = 40;

// console.log( val );




// console.log( val )

// var val = 5;




// console.log( val )//accessing let variable before declaring is illegal since variable hoisting does not exist...

// let val = 5;



// var anony = function() {

//     console.log( ' inside add anonymous function' )
// }

// function add(passed) {

//     passed();

// }

// add( anony )







// function add(passed) {

//     passed();

// }
// add( function() {

//     console.log( ' inside add anonymous function' )
// });



// function passAnony( val ) {

//     console.log(' inside regular function...')
//     //val();
// }

// // passAnony(function() {
// //     console.log('first line')
// //     console.log('second line')
// //     console.log('third line')
// // })

// passAnony(function() {
//     console.log('fourth line')
//     console.log('second line')
//     console.log('nintn line')
// })













// var names = [
//     'Anees',
//     'Varsha',
//     'Sindhu'
// ]


// names.sort();

// console.log ( names );




// var ages = [
//     3, 45, 21, 100
// ]


// ages.sort(function(x, y) {

//     return x - y;
// })


// console.log( ages )


// var ages = [
//     3, 45, 21, 100
// ]


// ages.sort(function(x, y) {

//     return y - x;
// })


// console.log( ages )



// function displayEven( num, passed ) {

//     var num = passed(num);
    
//     if( num % 2 == 0 ){
//         console.log( 'No printed')
//     }

//     else {
//         console.log( 'Not Printed')
//     }
// }

// displayEven(11, function( data ) {

//     return data * 3;
// })


// function displayEven( anony ) {

//    var num = anony(13);

//     if( num % 2 == 0 ){
//         console.log(' It is Even Number...')
//     }

//     else {
//         console.log('It is Odd Number')
//     }
// }

// displayEven( function( data ) {

//     return data + 5;
// })






var data = [
    33, 65, 22, 79
]

var data2 = data.filter( function(x) {
    if( x % 2 == 0){
        return true;
    }
    else {
        return false;
    }
})

console.log(data2)
