 let src = {
    age:12,
    wt:68,
    ht:180
};

let dest = {};
//cloning using iteration
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

src.age = 90;
                                   //in cpp we use free keyword to free up heap mem  in javascript garbage  collecotr keeps running in background to free up memory not in use it works automatically unlike free keyword which we use manually
console.log("src: ", src);
console.log("dest: ", dest);

// let src2 = {
//     value:101,
//     name: "Love babbar"
// }

// let dest = Object.assign({}, src, src2);

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);


// let dest = {...src};
// //let dest = src;

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

// console.log(obj)

// obj.color = "White";         //obj are dynamic in nature we can add elements in  objects after creating them

// console.log(obj)

