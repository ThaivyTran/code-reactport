import React from 'react';

function Resume() {
  const onButtonClick = () => {
    // using JS method to get PDF file
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
  }
  return (
    <div className="container mt-5">
      <h1 className="mb-3">- Resume -»</h1>
      <br></br>
        <div className="mb-3">
          <p>Click on below button to download PDF file</p>
            <button className="btn btn-primary" onClick={onButtonClick}>Download</button>
        </div>
    </div>
  )
}

export default Resume;