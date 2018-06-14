var fake = require("./node_modules/faker");

//fake;

for(var i = 0; i < 10; i++)
{
  console.log("product -> " + fake.commerce.product());
  console.log("price -> " + fake.commerce.price());
}
