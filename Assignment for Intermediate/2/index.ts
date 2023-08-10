function reverseArray (arr:any){
    let rarray=[];
    
    for(let i =arr.length-1;  i>=0;  i--)   
    
    {
        rarray.push(arr[i])
    }

    
    return rarray;
}





const arr = [1, 2, 3, 4, 5];
const abc = reverseArray(arr);
console.log(abc);