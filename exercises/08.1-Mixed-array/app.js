let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let typeArray = []
for (let i = 0; i < mix.length; i++){
    typeArray.push( typeof mix[i] )
}

console.log(typeArray)