// import React from 'react';
// import { Alert, ListGroup } from 'react-bootstrap';

// const EvaluateResume = ({ content }) => {
//   const errors = [];
// //   const keywords = ["experience", "skills", "education", "projects"];

//   // Simple evaluation logic (this would be replaced with actual ATS logic)
//   let score = 100;
//   if (!content.includes("experience")) {
//     errors.push("Missing keyword: experience");
//     score -= 20;
//   }
//   if (!content.includes("skills")) {
//     errors.push("Missing keyword: skills");
//     score -= 20;
//   }
//   if (!content.includes("education")) {
//     errors.push("Missing keyword: education");
//     score -= 20;
//   }
//   if (!content.includes("projects")) {
//     errors.push("Missing keyword: projects");
//     score -= 20;
//   }

//   return (
//     <div>
//       <h3>Resume Score: {score}/100</h3>
//       {errors.length > 0 && (
//         <Alert variant="danger">
//           <h4>Errors:</h4>
//           <ListGroup>
//             {errors.map((error, index) => (
//               <ListGroup.Item key={index}>{error}</ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Alert>
//       )}
//     </div>
//   );
// };

// export default EvaluateResume;
