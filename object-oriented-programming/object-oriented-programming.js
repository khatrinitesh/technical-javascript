const user = {
	name:'div',
	age:35,
	getBirthYear:function(){
		return new Date().getFullYear() - this.age;
	}
}
console.log(user.getBirthYear());

function createUser(firstName,lastName,age){
	const user = {
		firstName,
		lastName,
		age,
		getBirthYear(){
			return new Date().getFullYear() - this.age;
		},
	}
	return user;
}
const user1 = createUser('nitesh','shah',21);
const user2 = createUser('n','s',33)
console.log(user1.getBirthYear());
console.log(user2.getBirthYear());
console.log(user1.getBirthYear() === user2.getBirthYear());