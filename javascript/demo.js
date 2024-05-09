
// const arr=[1,2,3,4,5]
// for(let val of arr){
//     console.log(val);
// 
// let list=["hi","hello","bye"]
// list.forEach(val => console.log(val))
// let names=["vivek","Maha","Aarthi"]
// console.log(names.map(val => val+" "+"genious"))
// let course=["java","sql","mongodb","reactjs"]
// console.log(course)
// console.log(course.splice(1,2))
// console.log(course);
// console.log(course);
// let names=("vivekaarthimahakannan","andra","1233"
// let arr=Array.from(names)
// console.log(arr)
 // let isit=[1,2,3,4,5]
 // let arr =Array.isArray(isit);
 // console.log(arr)
 // let a=Array.of("vivek","kannan","maha"
 // console.log(a)
  // let a=[1,2,3,4];
  // let b=[5,6,7,8];
  // let c=a.concat(b)
  // console.log(c)
 // let arr=[1,2,3,4,5,6,7,8,9]
 //  let copy=arr.entries()
 //  console.log(Array.isArray(copy))
 // function isEven(element, index, array) {
 // 	return element % 2 ==0;
 // }
 // function func() {
 // 	let arr = [56, 92, 18, 88, 12]
 // 	// Check for even number
 // 	let value = arr.every(isEven);
 // 	console.log(value);
 // }
 // func()
  // let a=[1,2,3]
  // let b=[1,2,3
  // console.log(a.every(b))
  // let a=[1,2,3,4,5,6]
  // console.log(a.fill(9,2,4))
  // let array=[1,3,4,5,7,2
  // let found=array.findIndex(function (element){
  //     return element % 2==0
  // })
  // console.log(found
 // let A = [1, 2, 3, 4, 5]
  // Mapping with map method.
//c = A.map(x => (x * 3));
    //console.log(c)
 // let B = [1, 2, 3, 4, 5]
 // // Mapping with map method.
 // b = B.map(x => [x,x * 3]);
 // console.log(b)
 // function func() {
 // 	let a = [11, 22, 33, 44,55, 66];
 // 	console.log(a.join(''));
 // }
 // func()
 // let a=[1,2,3,4,5,3]
 // console.log(a.lastIndexOf(3))
 // let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"]
 // console.log(webDvlop)
 // // Add 'React_Native' and 'Php' after removing 'JS'.
 // let removed = webDvlop.splice(-1, 1, 'PHP')
 // console.log(webDvlop);
 // console.log(removed)
 // let str="\'vivek\'"
 // console.log(str)
//  let str1="mind,power,tyre,power"
 // let str2=str1.replaceAll("power","rin")
 // console.log(str1);
 // console.log(str2);

// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

// creating objects in javascript

// let car ={
    // cname :"bolero",
    // color :"brown",
    // company :"mahindra",
    // sibling:{
        // brother:"scorpio",
        // youngerbrother:"thar"
    // },
    // made : "india"
// }
// console.log(car.cname);
// console.log(car.color);
// console.log(car.company);
// 
// var cnames="color"
// 
// console.log(car[cnames]);


// let person={
//     gname :"aarthi",
//     gage :42,
//     gno :9876543,
//     address :{
//         district :"salem",
//         state : "tamilnadu"
//     }
// };

// console.log(person.gname)
// console.log(person.gno)

// var a ="gname"
// var b="gage"

// console.log(person[a])

// console.log(person[b])

// object literals

// let bike={
//     bname :"r15",
//     bcolor:"black",
//     bloc :{
//         district :"chennai",
//         state : "tamilnadu",
//         bno :"TN 07 cd 0967"
//     },
//     bdetails:{
//         handed : "2nd hand",
//         cloc :"redhills"
//     }
// };
// console.log(bike.bcolor);
// console.log(bike.bname);
// console.log(bike.bloc.district);
// console.log(bike.bloc.state);


//  object literal 

// function person(){
//    return{
//         id :1,
//         pname : "aarthi", 
        
//         devloper :function(){
//             console.log("i am dot net devloper")
//         }
//     };
// }

// let person1 =person();
// console.log(person1);
// person1.devloper();


// function classmate(){
//    return{size :33*21,
//     mrp : 115,
//     pages : "228 pages",
//     type :"ruled",

//         reading : function(){
//         console.log("hey i am classmate i contain a story of mahabharath inside me ")
//         }
//     }
// }

// let note1 =classmate();
// console.log(note1);
// note1.reading();

// constructor function 

    // function Classmate(pages,mrp,size){
    //     this.pages=pages;
    //     this.mrp=mrp;
    //     this.size=size;

    //     this.reading = function(){
    //         console.log("i can give you a pleasant days all the year");
    //     }
    // }

    // const note1= new Classmate(23*12,112,"80 pages");
    // console.log(note1);

    //internal process of function


    // const A =new Function('pages','mrp','size',
    // `  this.pages=pages;
    //     this.mrp=mrp;
    //     this.size=size;

    //     this.reading = function(){
    //     console.log("i can give you a pleasant days all the year");
    // }`);
    
    // const b = new A("256","112","12*1");
    // console.log(b) 

    // creating instance of object
    // function Circle(radius){
    //     this.radius=radius;

    //     this.driving=function(){
    //         console.log("i love driving");
    //     }
    // }
    

    // let c=new Circle({},[1,2,3,4])
    // console.log(c.radius)

// Accesing value using []notation
    // Circle['radius']=2;

    // console.log(Circle['radius'])
// const circle1=new Circle(20);

// to read keys in object
// for(let key in circle1){
//     console.log(key)
// }

// to read key and value in object

// for(let key in circle1){
//     console.log(key,circle1[key]);
// }

// const keys=Object.keys(circle1);
// console.log(keys);


// function Circle(radius){
//     this.radius=radius;

//     this.driving=function(){
//         console.log("i love driving");
//     }
// }

// let circle1=new Circle(10);

// let c=Object.keys(circle1);

// console.log(c)


// constructor function 

//  function Classmate(pages,mrp,){
//      this.pages=pages;
//      this.mrp=mrp;
//      let size=10;
 
//      this.reading = function(){
//          console.log("i can give you a pleasant days all the year");
//      }
//  }

//     let a=new Classmate(100,122);
//     console.log(a);

//     Object.defineProperty(this,'size',{
//         get:function() {
//             return size;
//         }
//     });






