import './css/Download.css';

function Download() {

  return (
    <div className="download">
      <h1>Download</h1>
      <p>Get our powerful MRI denoising tool for your desktop.</p>
      <div className="download-options">
        <button className="download-button"><a href="https://neurapixel.vercel.app/assets/neurapixelai.apk">Download for Android</a></button>
        <button className="download-button" onClick={() => alert("Coming Soon")}>Download for iOS</button>
      </div>
      <div className="app-features">
        <h2>Key Features</h2>
        <ul>
          <li>Advanced MRI denoising algorithms</li>
          <li>Real-time image processing</li>
          <li>User-friendly interface for medical professionals</li>
          <li>Secure data handling and HIPAA compliance</li>
        </ul>
      </div>
    </div>
  );
}

export default Download;
