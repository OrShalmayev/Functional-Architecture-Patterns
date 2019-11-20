const user = {firstName:"Or", lastName:"Shalmayev"};
const fullName = (firstName, lastName) => [firstName, lastName].join(' ');

fullName(user.firstName, user.lastName);
// Output: Or Shalmayev