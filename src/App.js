import React from 'react';
import UploadResume from './ATS/UploadResume';

function App  () {
  return (
    <div>
      <UploadResume />
    </div>
  );
};

export default App;









// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import UploadResume from './ATS/UploadResume';
// import EvaluateResume from './ATS/EvaluateResume';

// const App = () => {
//   const [resumeContent, setResumeContent] = useState(null);

//   const handleUpload = (content) => {
//     setResumeContent(content);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md="6">
//           <h1 className="text-center">Resume Evaluator</h1>
//           <UploadResume onUpload={handleUpload} />
//           {resumeContent && <EvaluateResume content={resumeContent} />}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;


