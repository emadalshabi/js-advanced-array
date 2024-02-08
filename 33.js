function filterRange(arr, a, b) {

    return arr.filter(item => item >= a && item <= b);
  }
// Example

  let numbers = [1, 2, 3, 4, 5, 6, 7];

  let fromatob= numbers.filter(between => between >=3 && between<=5 )

  console.log(fromatob);





  let john = { name: "John", age: 25 }
  let pete = { name: "Pete", age: 30 } 
  let mary = { name: "Mary", age: 28 }
  
  let userss = [ john, pete, mary ]
  
  let names = userss.map ( x=> x.name );
  
  console.log( names );


  


  let users = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 50},
    {name: 'Charlie', age: 30}
];

  function getAverage(users) {
    if (users.length === 0) {
        return 0;
    }

    let totalAge = users.reduce(function(sum, user) {
        return sum + user.age;
    }, 0);

    return totalAge / users.length;
}


let averageAge = getAverage(users);
console.log("Average age:", averageAge);