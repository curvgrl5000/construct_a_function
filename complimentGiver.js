// One Way via ID
var users = ["Anne", "Jason", "Tom"];
var newUser = prompt("What is your name?");
users.push(newUser);
var message = "your fabulous! ";

function complimentGiver(users, message) {
	var collectiveWelcome = [];
	for (var i = 0; i < users.length; i++) {
		collectiveWelcome.push(users[i] + " " +  message + "<br />" )
	}
	return collectiveWelcome.join(" ");
}

document.getElementById("demo_1").innerHTML = complimentGiver(users, message);
console.log(complimentGiver(users, message));

// Another Way via CLASS
var friends = ["Anne", "Jason", "Tom"];
var newFriend = prompt("Who is your best friend(s)?");
var alerts = "your the best!";
friends.push(newFriend);

function thankYourFriend(friends, alerts) {
	var friendList = [];
	for (var i = 0; i < friends.length; i++) {
		friendList.push(friends[i] + " " + alerts + "<br />")
	}
	return friendList.join(" ");
}

function myFunction() {
    document.querySelector("#demo_2").innerHTML = thankYourFriend(friends, alerts);
}
console.log(thankYourFriend(friends, alerts));

// Another Way wth REUSABLE ELEMENTS
var folks = ["Anne", "Jason", "Tom"];
folks.push(newFriend);
var notice = "you've been invited!";
var mainDiv = document.getElementById("main");
var p = mainDiv.getElementsByTagName("p");

function yourInvited(folks, notice) {
	var invited = [];
	for(var i = 0; i < folks.length; i++) {
		invited.push(folks[i] + " " + notice + " " + p[0].innerHTML + "<br />")
	}
	return invited.join(" ");
}

document.getElementById("demo_3").innerHTML = yourInvited(folks, notice);
console.log(yourInvited(folks, notice));

function reSet() {
    location.reload();
}