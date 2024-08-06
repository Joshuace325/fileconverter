import React, { useState } from "react";
import "./Convertiflie.css";

const FileFlex = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isConverted, setIsConverted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("png");

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

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleDownload = () => {
    const url = URL.createObjectURL(selectedFile);
    const a = document.createElement("a");
    a.href = url;
    const fileNameWithoutExtension = selectedFile.name
      .split(".")
      .slice(0, -1)
      .join(".");
    a.download = `${fileNameWithoutExtension}.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
            <select
              className="file-format"
              value={selectedFormat}
              onChange={handleFormatChange}
            >
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="bmp">BMP</option>
              <option value="ico">ICO</option>
              <option value="tiff">TIFF</option>
              <option value="raw">RAW</option>
              <option value="jpeg">JPEG</option>
              <option value="gif">GIF</option>
              <option value="webp">WEBP</option>
              <option value="tif">TIF</option>
              <option value="svg">SVG</option>
              <option value="tga">TGA</option>
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
              <button className="download-button" onClick={handleDownload}>
                Download
              </button>
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
