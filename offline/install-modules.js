var Walk = require('./walk')

console.log('-------------------------------------------------------------');
console.log('inistalling frontend modules...');
console.log('-------------------------------------------------------------');

Walk("./node_modules_frontend", "../client/node_modules", false, function(error) {
  if (error) {
    throw error;
  }
  else {
    console.log('-------------------------------------------------------------');
    console.log('frontend modules successfully inistalled.');
    console.log('-------------------------------------------------------------');
  }
  
  console.log('-------------------------------------------------------------');
  console.log('inistalling backend modules...');
  console.log('-------------------------------------------------------------');

  Walk("./node_modules_backend", "../node_modules", false, function(error) {
    if (error) {
      throw error;
    }
    else {
      console.log('-------------------------------------------------------------');
      console.log('frontend backend successfully inistalled.');
      console.log('-------------------------------------------------------------');
    }
  });
});
