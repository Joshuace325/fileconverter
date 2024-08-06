import React, { useState } from "react";
import "./Convertiflie.css";

const FileFlex = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isConverted, setIsConverted] = useState(false);

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsConverted(false);
    }
  };

  const handleConvert = () => {
    // Simulate file conversion process
    setTimeout(() => {
      setIsConverted(true);
    }, 1000);
  };

  return (
    <div className="container">
      <h1 className="title">Free Unlimited File Converter</h1>
      <p className="description">
        Convertiflie your go-to online tool for unlimited and free multimedia
        conversion, all processed locally on your device for enhanced privacy
        and security. Easily convert images, audio, and videos without any
        restrictions. Start converting now and streamline your content
        effortlessly with FileFlex!
      </p>
      {selectedFile ? (
        <div className="file-info">
          <div className="file-details">
            <img
              src="/mnt/data/image.png"
              alt="File Icon"
              className="file-icon"
            />
            <span className="file-name">{selectedFile.name}</span>
            <span className="file-size">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </span>
            <select className="file-format">
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="pdf">PDF</option>
              {/* Add more options as needed */}
            </select>
            <button
              className="remove-file"
              onClick={() => setSelectedFile(null)}
            >
              X
            </button>
          </div>
          {!isConverted ? (
            <button className="convert-button" onClick={handleConvert}>
              Convert Now
            </button>
          ) : (
            <>
              <button className="download-button">Download</button>
              <button
                className="convert-another-button"
                onClick={() => setSelectedFile(null)}
              >
                Convert Another File(s)
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="upload-container" onClick={handleClick}>
          <p className="upload-text">Click, or drop your files here</p>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default FileFlex;
