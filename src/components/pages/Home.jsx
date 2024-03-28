import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Home.css";
import NavBar from "../NavBar/NavBar";
const Home = () => {
  const history = useNavigate();
  const fileTypes = ["PDF"];
  const [file, setFile] = useState(null);
  const handleChange = async (file) => {
    setFile(file);
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    });

    history("/chat", { state: { name: file.name } });
  };
  return (
    <div className="box">
      <NavBar />
      <div className="txt">
        <h1>Chat with any PDF</h1>
        <h3>Join millions of students, researchers and professionals to </h3>
        <h3>instantly answer questions and understand research with AI</h3>
      </div>
      <div className="upload-wrp">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={false}
          label="Upload PDF"
          hoverTitle="Drop here"
          onDrop={handleChange}
        />
      </div>
    </div>
  );
};

export default Home;
