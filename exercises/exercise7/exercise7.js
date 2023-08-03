// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

database = [{
    username: "Marko",
    password: "password"
},

 {
    username: "Zarko",
    password: "123"
},

{
    username: "Darko",
    password: "321"
}]

newsfeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
]



function isUserValid(username, password) {
	for (var i=0; i < database.length; i++){
		if (database[i].username == username && database[i].password == password) {
			return true
		}	
	
	}
	return false
}

function signIn(username, password) {
	if (isUserValid(username, password)){
		console.log(newsfeed)
		alert("Welcome, " + username)
	}

	else {
		alert("Wrong username or password")
	} 
}




userNamePrompt = prompt("what's your username?")
passwordPrompt = prompt("what's your password?")

signIn(userNamePrompt, passwordPrompt)




// signIn(userNamePrompt, passwordPrompt)