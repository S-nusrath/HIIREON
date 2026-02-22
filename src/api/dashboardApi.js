// export const getDashboardData = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         score: 82,
//         applications: 12,
//         streak: 7,
//         skills: [
//           { name:"React", level:85 },
//           { name:"Node", level:70 },
//           { name:"MongoDB", level:65 },
//           { name:"DSA", level:60 }
//         ],
//         activities: [
//           { type:"job", text:"Applied for Frontend Intern", time:"2 hrs ago" },
//           { type:"success", text:"Completed React Quiz", time:"Yesterday" },
//           { type:"reward", text:"Earned 50 XP", time:"2 days ago" }
//         ]
//       });
//     }, 1000);
//   });
// };
export const getDashboardData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        score: 82,
        applications: 12,
        streak: 7,
        skills: [
          { name:"React", value:85 },
          { name:"Node", value:70 },
          { name:"MongoDB", value:65 },
          { name:"DSA", value:60 }
        ],
        activities: [
          { type:"job", text:"Applied for Frontend Intern", time:"2 hrs ago" },
          { type:"success", text:"Completed React Quiz", time:"Yesterday" },
          { type:"reward", text:"Earned 50 XP", time:"2 days ago" }
        ]
      });
    }, 1000);
  });
};