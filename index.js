// Write a program that takes an array as input from the user and find out the product of the elements.

// Note: You have to complete Find_Prod. No need to take any input.



const Find_Prod = (array, N) => 
{
 
     let pro=1;
            for (let element of array){
              pro*=element
            }return pro;

};
 



// Write a program which takes an array as input from the user and find out the sum of the array elements. Note: You have to complete Find_Sum. No need to take any input.


const Find_Sum = (array, N) => 
{
  
  let sum = 0;
   for(let element of array){
     sum=sum+element
   }
   return sum;
};


// Count Occurrences
// You are given an array A containing  N integer elements and an integer  K , and your task is to return the count of occurrences of K in array A .


const findCount = (N, K, Arr) => 
{
     let count=0;
            for(let i in Arr){
              if(Arr[i]===K){
                count += 1;
              }
            }return count; 
};
 
// Even Odd


const findEvenOdd = (N, Arr) => 
{
  let even=0;
  let odd=0;
  let B=[];
  for(let element in Arr){
    if(Arr[element]%2===0){
      even=even+Arr[element];
    }
    else{
      odd=odd+Arr[element];
    }
  }
  B[0]=even;
  B[1]=odd;
  return B;
  
};
 






// Find whether the number is present or not



const Find_Num = (array,N,M) => 
{
  let num=0;
            for(let i of array){
              if(i===M){
                num+=1
              }
            }
            if(num>0){
              return "YES";
            }else{
              return "NO"
            }
};
 

//Higher Age 

const highAge = (N, Arr) => 
{
   let B=[];
   for(let element of Arr){
     if(element>=18){
       B.push(element);
     }
   }
   return B;
};

// //Increment the array elements

const Inc_Arr = (array,N) =>
{
  array.forEach(function(val){
    val+=1;
    console.log(val);
  })
   
 
 };


 //Pass or fail

const isAllPass = (N, Arr) => 
{
   return Arr.every((i)=>i>=32)?"YES":"NO"; 
};

//Unique color shirt

function Unique_Shirts (arr,N) {

  let unique=arr.filter((value)=>arr.indexOf(value)===arr.lastIndexOf(value));
  return (unique.length); 
  };

  // //Min and Max

  // For Min:
  let min=arr[0];
  for(let i of arr){
    if(min>i){
      min=i;
    }
  }return min; 

  // For Max: 
  let max=arr[0]
  for(let i of arr){
      if(max< i){
        max=i;
      }
    }return max;


    // Birthday Game

    let finalCount=0;
            for(let i=0;i<(arr.toString().length-M);i++){
              let count=0;
              for(let j=i;j<(i+M);j++){
                count+=arr[j];
              }
              if(count===D){
                finalCount+=1
              }
            }
            return finalCount; 



























