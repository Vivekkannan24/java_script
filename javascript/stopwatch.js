// function Stopwatch(){

//     let startTime,endTime,reset,duration =0;

//     this.startTime=function(){
//         if(running)
//             throw new error('stopwatch has already started')
//         running=true;
//         startTime=new Date();
//     };

//     this.endTime=function(){
//         if(!running)
//             throw new error('stopwatch is not yet started')
//             running=false;
        
//         endTime=new Date();
//         const seconds=(endTime.getTime-startTime.getTime)/1000
//         duration+=seconds;
//     }
//     this.reset=function(){
//         startTime=null;
//         endTime=null;
//         duration=0;
//         running=false;
//     }

// }

// const timer=new Stopwatch();
//    console.log( timer.startTime());
//     timer.endTime();
//     timer.duration;