import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [issues, setIssues] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const resumeText = event.target.result;
        const result = await evaluateResume(resumeText);
        setScore(result.score);
        setIssues(result.issues);
      };
      reader.readAsText(file);
    }
  };

  const evaluateResume = async (text) => {
    // Placeholder function to simulate ATS evaluation
    const score = Math.floor(Math.random() * 100); 
    const issues = score < 50 ? ['Lack of keywords', 'Poor alignment'] : [];
    return { score, issues };
  };
 

  return (
    <Container className='border border-success rounded shadow bg-body rounded'>
      <Row style={{backgroundColor:"rgb(249,237,237)"}} >
        <Col md={{ span: 6, offset: 3 }}>
        <h1>ATS-Checker Application</h1>
        <br />
          <h4 style={{color:'gray'}}>Upload Your Resume And Evaluate Resume</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Resume File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Evaluate Resume
            </Button>
          </Form>
          {score !== null && (
            <Alert variant="info" className="mt-3">
              <h4>Resume Score: {score}/100</h4>
              {issues.length > 0 && (
                <ul>
                  {issues.map((issue, index) => (
                    <li key={index} style={{ color: 'red' }}>
                      {issue}
                    </li>
                  ))}
                </ul>
              )}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UploadResume;
