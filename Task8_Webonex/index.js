// 1. Create a function that takes a number and prints all even numbers upto that number
function printEvenNo(n){
   for(let i=0;i<n;i++)
   {
       if(i%2==0){
           console.log(i);
       }
   }
}
let n=10;
let result=printEvenNo(n);
// 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
const employeeArray=[
    {name:"xyz",
    age:30,
    email:"xyz@gmail.com",
    gender:"female",
    address:"123 sector E",
    isMarried:true

},
{
    name:"abc",
    age:26,
    email:"abc@gmail.com",
    gender:"Male",
    address:"123 sector E",
    isMarried:false

}];

const filterEmployeeByAge = (employeeArray, age) => {
    return employeeArray.filter((employee) => employee.age < age);
  };
  
  const ageRestrictedArray = filterEmployeeByAge(employeeArray, 28);
  console.log(ageRestrictedArray);
// 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.
const customSort = (employeeArray, attr) => {
    const compare = (a, b) => {
      switch (typeof a[attr]) {
        case "number":
          return a[attr] - b[attr];
        case "boolean":
          return Number(b[attr]) - Number(a[attr]);
        default:
          if (a[attr] > b[attr]) return 1;
          if (a[attr] < b[attr]) return -1;
          return 0;
      }
    };
    employeeArray.sort(compare);
  };
  
  customSort(employeeArray, "name");
  console.log(employeeArray);