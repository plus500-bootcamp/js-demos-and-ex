// Fixed TypeScript version
interface User {
  name: string;
  email: string;
  age: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

interface ProcessedUser {
  displayName: string;
  status: 'active' | 'inactive';
}

function processUser(user: User): ProcessedUser {
  console.log(user.name.toUpperCase());
  console.log(user.email.toLowerCase());
  
  if (user.age > 18) {
    console.log('Adult user');
  }
  
  return {
    displayName: user.firstName + ' ' + user.lastName,
    status: user.isActive ? 'active' : 'inactive'
  };
}

const userData: User = {
  name: 'Alice',
  email: 'ALICE@EXAMPLE.COM',
  age: 25,
  firstName: 'Alice',
  lastName: 'Smith',
  isActive: true
};

const result = processUser(userData);
console.log(result.displayName); // Fixed: correct casing

