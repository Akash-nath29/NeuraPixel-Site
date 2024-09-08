import { useState } from "react";
import "./css/ApiDocs.css";

function ApiDocs() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const CodeBlock = ({ children, index, language }) => (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-language">{language}</span>
        <button
          className="copy-button"
          onClick={() => copyToClipboard(children, index)}
        >
          {copiedIndex === index ? "Copied!" : "Copy code"}
        </button>
      </div>
      <pre><code>{children}</code></pre>
    </div>
  );

  return (
    <div className="api-docs-container">
      <div className="sidebar">
        {/* <h1>API For Developers</h1> */}
        <p>Page Content</p>

        <ul className="sidebar-list">
          <li>
            <a href="#endpoint">Endpoint</a>
          </li>
          <li>
            <a href="#request-example">Request Example</a>
          </li>
          <li>
            <a href="#response-example">Response Example</a>
          </li>
        </ul>
      </div>
      <div className="api-docs">
        <h1>API For Developers</h1>
        <p>Integrate NeuraPixel AI into your projects with our simple API.</p>
        <div className="endpoint" id="endpoint">
          <h2>Endpoint</h2>
          <p>The base URL for all API requests is:</p>
          <CodeBlock index={6} language="plaintext">
            {"http://127.0.0.1:5000/api/predict/"}
          </CodeBlock>
          <p>Use this endpoint to send POST requests with your image data for processing.</p>
        </div>
        <div className="request-example" id="request-example">
          <h2>Request Example</h2>
          <p>Here are examples of how to make API requests using different methods:</p>
          
          <h3>HTTP Request</h3>
          <p>Send a POST request with JSON payload containing the base64-encoded image:</p>
          <CodeBlock index={0} language="bash">
            {`POST /api/predict/ HTTP/1.1
Host: 127.0.0.1:5000
Content-Type: application/json

{
    "image": "iVBORw0...U5ErkJggg==",
}`}
          </CodeBlock>
          <p>Ensure that the Content-Type header is set to application/json and the image is properly base64 encoded.</p>

          <h3>Python</h3>
          <p>Use the requests library to send a POST request with the image file:</p>
          <CodeBlock index={1} language="python">
            {`import requests

url = "http://127.0.0.1:5000/api/predict/"
files = {"image": open("noisy_mri.jpg", "rb")}
response = requests.post(url, files=files)
print(response.json())`}
          </CodeBlock>
          <p>This example opens a local image file and sends it as part of the request.</p>

          <h3>JavaScript</h3>
          <p>Use the fetch API to send a POST request with the image data:</p>
          <CodeBlock index={2} language="javascript">
            {`fetch("http://127.0.0.1:5000/api/predict/", {
  method: "POST",
  body: {
    image: "iVBORw0...U5ErkJggg==",
  },
})
.then(response => response.json())
.then(data => console.log(data));
`}
          </CodeBlock>
          <p>Remember to handle any errors that may occur during the fetch operation.</p>

          <h3>cURL</h3>
          <p>Use cURL to send a POST request from the command line:</p>
          <CodeBlock index={3} language="curl">
            {`curl -X POST http://127.0.0.1:5000/api/predict/ -H "Content-Type: application/json" -d '{"image": "iVBORw0...U5ErkJggg=="}'`}
          </CodeBlock>
          <p>Replace the placeholder image data with your actual base64-encoded image.</p>

          <h3>Postman</h3>
          <p>Configure a POST request in Postman with the following settings:</p>
          <CodeBlock index={4} language="postman">
            {`POST http://127.0.0.1:5000/api/predict/
Content-Type: application/json

{
    "image": "iVBORw0...U5ErkJggg==",
}`}
          </CodeBlock>
          <p>In Postman, set the body type to &quot;raw &quot; and select JSON format before sending the request.</p>
        </div>
        <div className="response-example" id="response-example">
          <h2>Response Example</h2>
          <p>Upon successful processing, the API will return a JSON response with the following structure:</p>
          <CodeBlock index={5} language="Example Response">
            {`{
  "image": "iVBORw0...U5ErkJggg==",
  "psnr": 30.5            
}`}
          </CodeBlock>
          <p>
            The response includes:
            <ul>
              <li><strong>image:</strong> The base64-encoded processed image</li>
              <li><strong>psnr:</strong> The Peak Signal-to-Noise Ratio, indicating the quality improvement</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApiDocs;
