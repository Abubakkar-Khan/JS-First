const id = Symbol("123")
const NEW_id = Symbol("123")

// console.log(id)
// console.log(NEW_id)

let bit_int = 123123123123123n

const array = ["abc", "123", "qwe"]
const n_array = [1, 23, 122]
console.log(n_array)

let m_obj = {
    name: "Ali",
    age: 22
};
 console.log(m_obj)
 
 const m_fun = function () {
     console.log(typeof array)
}

m_fun()

// Objects are Heap memory

let x = {
    a : 123
};


let y = x
y.a = 2005

y.a = "Hello"

console.log(x)
console.log(y)

