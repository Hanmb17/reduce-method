  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
 const nums = [0, 1, 2, 3, 4];
 let sum = nums.reduce((acc, curr) => acc + curr);
 console.log(sum);

 let sum1 = nums.reduce((acc, curr) => {
    console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr );
    
    return acc + curr;
 });
 console.log(sum1);

// decaring a starting point - good practice to declare it prevents bugs.
 let sum2 = nums.reduce((acc, curr) => {
    console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr );
    
    return acc + curr;
 },0);
 console.log(sum2);

// back to one liner
 let sum3 = nums.reduce((acc, curr) => acc + curr, 0);
 console.log(sum3);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property

let totalExperinace = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperinace);



// Grouping by a property, and totaling it too

let experienceByProfession  =   teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if(!acc[key]){
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;

}, {} )

console.log(experienceByProfession);
