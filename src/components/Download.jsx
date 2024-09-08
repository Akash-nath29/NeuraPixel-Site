import "./css/Download.css";
import DownloadImage from "./assets/productAbout.jpg";
import EasyToUseImage from "./assets/phone1.png";
import AdvancedDenoisingImage from "./assets/phone2.png";

function Download() {
  const handleAndroidDownload = () => {
    const apkUrl = `${window.location.origin}/neurapixelai.apk`;
    console.log("Attempting to download from:", apkUrl);

    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "neurapixel-ai.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download">
      <h1>Download</h1>
      <p>Get our powerful MRI denoising tool for your desktop.</p>
      <div className="download-options">
        <button className="download-button" onClick={handleAndroidDownload}>
          Download for Android
        </button>
        <button className="download-button" onClick={()=>alert("Coming Soon")}>Download for iOS</button>
      </div>
      <div className="app-features">
        <img src={DownloadImage} alt="Download" />
        <h1>Features</h1>
        <span className="row first">
          <span className="text">
            <h2>Easy to use</h2>
            <p>
              Our app is designed to be user-friendly and easy to use. You can
              easily navigate through the app and get the results you want.
            </p>
          </span>
          <img src={EasyToUseImage} alt="Easy to use" />
        </span>
        <span className="row second">
          <span className="text">
            <h2>Advanced AI denoising</h2>
            <p>
              Our app uses advanced AI denoising algorithms to remove noise from
            your MRI images.
            </p>
          </span>
          <img src={AdvancedDenoisingImage} alt="Advanced denoising" />
        </span>
      </div>
    </div>
  );
}

export default Download;
