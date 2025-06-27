const arr = [1, 2, 3, "Rose"]
arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

for(const item of arr){
    console.log(item)
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

// Big -O
// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n)


const set = new Set([1,2,3])
set.add(4)
console.log(set.has(2))
set.delete(3)
console.log(set.size)
set.clear()

for(const item of set) {
    console.log(item)
}


const map = new Map([['a', 1], ['b', 2]])
map.set('c', 3)
map.delete('c')
console.log(map.has('a'))
console.log(map.size)
map.clear()

for(const [key, value] of map) {
    console.log(`${key}: ${value}`)
}
