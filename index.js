const arr = [1, 2, 3, "Rose"]
arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

for(const item of arr){
    // console.log(item)
}


const obj = {
    name:"Ruth",
    age: "25",
    "key-three":true,
    sayMyName: function() {
        console.log(this.name)
    }
}

obj.hobby = "football"
delete obj.hobby

console.log(obj.name)
console.log(obj["age"])
console.log(obj["key-three"])
console.log(obj)
obj.sayMyName()

