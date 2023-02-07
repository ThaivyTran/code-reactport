import React from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../documents/Resume.pdf';

function Resume() {
  return (
    <div><h1>- Resume -»</h1>
      <br></br>
      <Document file={resume} >
      <Page pageNumber={1} /> 
    </Document>
    </div>
  )
}

export default Resume