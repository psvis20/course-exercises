// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let nfeArray = []
array.forEach(user => {
    let {username} = user
    username = username + "!"
    nfeArray.push(username)
})
console.log(nfeArray)

//Create an array using map that has all the usernames with a "? to each of the usernames
mapArray = array.map(user => {
  let{username} = user
  return username + "?"
})

//Filter the array to only include users who are on team: red
filterArray = array.filter(user => user.team === "red")
console.log(filterArray)

//Find out the total score of all users using reduce
reduceArray = array.reduce((uScore, user) => {
  score = user.score
  return uScore + score
}, 0) //71

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) =>  num * 2)
console.log(newArray)

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
newList = array.map(user => {
  user.items = user.items.map(item => {
    user.items = item
    item = item + "!"
    return item
  })
  return user
})