let firstName: string = 'Matthew';
let lastName: string = 'Howard';

function myName(firstName: string, lastName: string): string {
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(myName(firstName, lastName));