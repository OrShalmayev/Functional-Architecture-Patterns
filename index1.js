const user = {firstName:"Or", lastName:"Shalmayev"};
const fullName = (firstName, lastName) => [firstName, lastName].join(' ');

fullName(user.firstName, user.lastName);
// Output: Or Shalmayev

// rename fullName to joinWithSpace
const joinWithSpace = (...args) => args.join(' ');
joinWithSpace(user.firstName, user.lastName);
// Output: Or Shalmayev

joinWithSpace('a','b','c'); // 'a b c'
joinWithSpace(joinWithSpace('a','b'),'c'); // 'a b c' 
joinWithSpace('a', joinWithSpace('b','c')); // 'a b c' 