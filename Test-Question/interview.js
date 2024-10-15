// let Chairs = ["A1", "A2", "B1", "P1", "P7"];

// let Students = [
//   {
//     name: "Abhay",
//     roll: 1,
//   },
//   {
//     name: "Ashu",
//     roll: 4,
//   },
//   {
//     name: "Binod",
//     roll: 1,
//   },
//   {
//     name: "Prasad",
//     roll: 2,
//   },
//   {
//     name: "Deeksha",
//     roll: 10,
//   },
// ];
// function chairMapping(Chairs, Students) {
//   let chairsMapping = {};
//   let studentsWithNoChair = [];
//   let chairsWithNoStudents = [];

//   for (let i = 0; i < Chairs.length; i++) {

//     Students.map((student) => {
//       if ((Chairs[i][0] === student.name[0] && Chairs[i][1] == student.roll)) {
//         chairsMapping[Chairs[i]] = { name: student.name, roll: student.roll };
//       }
//     });
//   }
//   console.log(chairsMapping);
// }
// chairMapping(Chairs, Students);



function allocateChairs(chairs, students) {
    const chairAllocation = {};  // Final allocation of chairs
    const unallocatedStudents = [];  // Track students who are not directly allocated
    let unallocatedChairs = new Set(chairs);  // Track remaining chairs

    // Step 1: Direct Allocation
    students.forEach(student => {
        let allocated = false;
        chairs.forEach(chair => {
            const chairLetter = chair[0];
            const chairNumber = parseInt(chair.slice(1));
            
            // Check if first letter of name and roll number match
            if (chairLetter === student.name[0] && chairNumber === student.roll) {
                chairAllocation[chair] = student;
                unallocatedChairs.delete(chair);  // Remove allocated chair from unallocated
                allocated = true;
            }
        });
        if (!allocated) {
            unallocatedStudents.push(student);  // Track students not allocated directly
        }
    });

    // Step 2: Closest Matching for unallocated students
    unallocatedStudents.forEach((student, i) => {
        let closestChair = null;
        let minDistance = Infinity;  // Set a large number for comparison
        
        unallocatedChairs.forEach(chair => {
            const chairLetter = chair[0];
            const chairNumber = parseInt(chair.slice(1));
            
            if (chairLetter === student.name[0]) {
                const distance = Math.abs(chairNumber - student.roll);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestChair = chair;
                }
            }
        });
        
        if (closestChair) {
            chairAllocation[closestChair] = student;
            unallocatedChairs.delete(closestChair);  // Remove allocated chair
            unallocatedStudents.splice(i, 1);  // Remove student from unallocated list
        }
    });

    // Step 3: Output Results
    console.log("Chair Allocations:");
    Object.entries(chairAllocation).forEach(([chair, student]) => {
        console.log(`Chair ${chair} -> ${student.name} (Roll: ${student.roll})`);
    });
    
    console.log("\nUnallocated Chairs:", Array.from(unallocatedChairs));
    console.log("Unallocated Students:", unallocatedStudents.map(student => `${student.name} (Roll: ${student.roll})`));
}

// Example Input
const chairs = ['A1', 'A2', 'B1', 'P1', 'P7'];
const students = [
    { name: 'Abhay', roll: 1 },
    { name: 'Ashu', roll: 4 },
    { name: 'Binod', roll: 1 },
    { name: 'Prasad', roll: 2 },
    { name: 'Deeksha', roll: 10 }
];

// Call the function
allocateChairs(chairs, students);
