import React from "react";
import NavBar from "../../NavBar/NavBar";
import { FileUploader } from "react-drag-drop-files";
import sn1 from "../../../assets/Live-collaboration.png";
import "./Home.css";
import Svg from "./Svg";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="home-first">
        <h1>Chat with any PDF</h1>
        <h3>Join millions of students, researchers and professionals to </h3>
        <h3>instantly answer questions and understand research with AI</h3>
        <div className="file-box">
          <FileUploader />
        </div>
      </div>

      {/* second page start */}

      <div className="home-se">
        <h2>Photo editing tools made for everyone</h2>
        <div className="home-se-p">
          <div className="home-se-p-ct">
            <h3>Batch edit photos</h3>
            <p>
              With batch processing, you can convert multiple photos at the same
              time. iLoveIMG supports PNG, JPG, GIF, WEBP, HEIC, RAW
              conversions, and more. Mass convert files up to 1GB per task with
              Premium.
            </p>
          </div>
          <div className="home-se-p-ct">
            <h3>Batch edit photos</h3>
            <p>
              With batch processing, you can convert multiple photos at the same
              time. iLoveIMG supports PNG, JPG, GIF, WEBP, HEIC, RAW
              conversions, and more. Mass convert files up to 1GB per task with
              Premium.
            </p>
          </div>
          <div className="home-se-p-ct">
            <h3>Batch edit photos</h3>
            <p>
              With batch processing, you can convert multiple photos at the same
              time. iLoveIMG supports PNG, JPG, GIF, WEBP, HEIC, RAW
              conversions, and more. Mass convert files up to 1GB per task with
              Premium.
            </p>
          </div>
        </div>
      </div>

      {/* second page end */}

      {/* thrid page start */}

      <div className="home-td">
        <div className="home-td-l">
          <h2>Get more with Premium</h2>
          <p>
            Edit multiple images faster with batch file processing, convert to
            several image formats in high resolution and enjoy a web experience
            free of ads.
          </p>
          <button>Get Premium</button>
        </div>
        <div className="home-td-r">
          <Svg />
        </div>
      </div>

      {/* third page end  */}

      {/* footer start */}

    <hr></hr>
      <footer>
        <p>© chatPDF, All Right Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
