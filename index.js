function minimum(a,b){
    console.log(a<b?a:b)
}

minimum(4,3)

arr = [1,2,3,4]
let i = 7
for (let a = 0; a < arr.length; a++, i++) {
    arr[a] = i
    
}
console.log(arr)