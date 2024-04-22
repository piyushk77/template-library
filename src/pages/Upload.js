// Upload.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Upload() {
  const handleUpload = (files) => {
    // Logic to handle file upload
    console.log('Uploaded files:', files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    handleUpload(files);
  };

  const handleFileInput = (e) => {
    const files = [...e.target.files];
    handleUpload(files);
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center uploadHeading">Upload Template</h2>
        <div
          className="border border-primary p-5 text-center uploadBorder"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <p className="mb-3">Drag and drop your template files here, or</p>
          <input
            type="file"
            accept=".ppt, .pptx, .doc, .docx, .xls, .xlsx"
            onChange={handleFileInput}
            multiple
          />
          <p className="mt-3">Supported formats: .ppt, .pptx, .doc, .docx, .xls, .xlsx</p>
        </div>
      </div>
      <Footer /> {/* Add Footer */}

    </div>
  );
}

export default Upload;
