// const employees =[
//     {id:10,name:'anand',department:'engineer',salary:30000},
//     {id:11,name:'charu',department:'sales',salary:35000},
//     {id:12,name:'hari',department:'engineer',salary:30000},
//     {id:13,name:'harini',department:'HR',salary:25000},
//     {id:14,name:'anand',department:'engineer',salary:30000}

// ];
// const employebonous=[
//     {}
// ]
// const employeeDetails =[
//     {id:1,name:"anand",department:"hr",salary: 20000 ,experience:2,bonusPercentage:10},
//     {id:2,name:"charu",department:"engineer",salary: 10000,experience:1,bonusPercentage:20},
//     {id:3,name:"hari",department:"sales",salary: 50000,experience:4,bonusPercentage:5},
//     {id:4,name:"harini",department:"engineer",salary: 70000,experience:2,bonusPercentage:30},
//      {id:1,name:"anand",department:"hr",salary: 20000,experience:2,bonusPercentage:10},
// ];

//remove duplicates
// function removeDuplicates(emp1) {
//     const newSet = new Set();
//     const uniqueEmployeeList = [];
    
//     for (const emp2 of emp1) {
//       if (!newSet.has(emp2.id)) {
//         newSet.add(emp2.id);
//         uniqueEmployeeList.push(emp2);
//       }
//     }
//     return uniqueEmployeeList;
//   }
//       const emp = removeDuplicates(employeeDetails);
// console.log(uniqueEmployees,emp);
//filter
// const chosenDepartment = "hr";
// function filterEmployee(employes) {
//   return employes.filter((employee)=>employee.department==choosenDepartment);
// }
// const filteredEmployees = filterEmployee(emp);
// console.log("Filtered Employees:", filteredEmployees);

//data initializion data :
const employeeDetails = [
  { id: 1, name: "anand", department: "hr", salary: 20000, experience: 2, bonusPercentage: 10 },
  { id: 2, name: "charu", department: "engineer", salary: 10000, experience: 1, bonusPercentage: 20 },
  { id: 3, name: "hari", department: "sales", salary: 50000, experience: 4, bonusPercentage: 5 },
  { id: 4, name: "harini", department: "engineer", salary: 70000, experience: 2, bonusPercentage: 30 },
  { id: 1, name: "anand", department: "hr", salary: 20000, experience: 2, bonusPercentage: 10 }, // Duplicate
];

// Remove duplicates
function removeDuplicates(emp1) {
  const newSet = new Set();
  const uniqueEmployeeList = [];

  for (const emp2 of emp1) {
    if (!newSet.has(emp2.id)) {
      newSet.add(emp2.id);
      uniqueEmployeeList.push(emp2);
    }
  }
  return uniqueEmployeeList;
}
const emp = removeDuplicates(employeeDetails);
console.log("Unique Employees:", emp);

// Filter employees by department
const chosenDepartment = "hr";
function filterEmployee(employees) {
  return employees.filter((employee) => employee.department === chosenDepartment);
}

const filteredEmployees = filterEmployee(emp);
console.log("Filtered Employees:", filteredEmployees);

