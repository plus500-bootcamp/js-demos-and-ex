// Buggy vanilla JS code
function processUser(user) {
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
  
  const userData = {
    name: 'Alice',
    email: 'ALICE@EXAMPLE.COM'
  };
  
  const result = processUser(userData);
  console.log(result.displayname); // Bug: wrong casing