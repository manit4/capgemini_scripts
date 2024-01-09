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



var names = [
    'Hafifa',
    'Manan',
    'FatimaSindhu',
    'Varsha'
]

for( var i = 0; i < names.length; i++ ){

    console.log( names[i])
}








