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
          <code>http://127.0.0.1:5000/api/predict/</code>
        </div>
        <div className="request-example" id="request-example">
          <h2>Request Example</h2>
          <CodeBlock index={0} language="bash">
            {`POST /api/predict/ HTTP/1.1
Host: 127.0.0.1:5000
Content-Type: application/json

{
    "image": "iVBORw0...U5ErkJggg==",
}`}
          </CodeBlock>
          <CodeBlock index={1} language="python">
            {`import requests

url = "http://127.0.0.1:5000/api/predict/"
files = {"image": open("noisy_mri.jpg", "rb")}
response = requests.post(url, files=files)
print(response.json())`}
          </CodeBlock>
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
          <CodeBlock index={3} language="curl">
            {`curl -X POST http://127.0.0.1:5000/api/predict/ -H "Content-Type: application/json" -d '{"image": "iVBORw0...U5ErkJggg=="}'`}
          </CodeBlock>
          <CodeBlock index={4} language="postman">
            {`POST http://127.0.0.1:5000/api/predict/
Content-Type: application/json

{
    "image": "iVBORw0...U5ErkJggg==",
}`}
          </CodeBlock>
        </div>
        <div className="response-example" id="response-example">
          <h2>Response Example</h2>
          <CodeBlock index={5} language="Example Response">
            {`{
  "image": "iVBORw0...U5ErkJggg==",
  "psnr": 30.5            
}`}
          </CodeBlock>

        </div>
      </div>
    </div>
  );
}

export default ApiDocs;
