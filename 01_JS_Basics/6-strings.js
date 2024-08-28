const name = "Abubakkar"
const repo_count = 5

console.log(name + repo_count + " Value")
console.log(`My name is ${name.toUpperCase()} and my repo count is ${repo_count}`);

const game = new String("Mario bros")

console.log(`${game}`);
console.log(game.length);
console.log(game.indexOf('r'));

const new_st = game.substring(0, 4)
console.log(new_st);

const another_st = game.slice(-9, 4)
console.log(another_st);

const trim_st = ("  Hello  A B U ")
console.log(trim_st);
console.log(trim_st.trim());

let rep_st = ("Abubakar khan.pk")
console.log(rep_st.replace(" ", "--").replace(".", "--"));
rep_st = rep_st.replace(" ", "-").replace(".", "-");
console.log(rep_st.split('-'));





console.log(rep_st.includes("khan"));
