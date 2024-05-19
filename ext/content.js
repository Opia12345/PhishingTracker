function createPopup() {
  const currentUrl = window.location.href;
  const isHttp = currentUrl.startsWith("http://");

  if (isHttp) {
    const popupHtml = `
      <div
        id="hello-world-popup"
        style="
          font-family: 'Helvetica Neue', Arial, sans-serif;
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(18, 18, 18, 0.95);
          z-index: 10000;
        "
      >
        <div style="
          background-color: #1e1e1e;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          max-width: 400px;
          color: white;
          width: 100%;
        ">
          <h1 style="font-size: 2rem; margin-bottom: 10px; color: #ff4c4c;">NetScrape Alert</h1>
          <svg xmlns="http://www.w3.org/2000/svg" style="width: 80px; fill: #ff4c4c; margin-bottom: 20px;" viewBox="0 0 512 512">
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
          </svg>
          <h4>Suspected Phishing</h4>
          <p>This page has been blocked by NetScrape Extension.</p>
          <p>Blocked URL: ${currentUrl}</p>
          <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 20px;">
            <button
              style="
                padding: 10px 20px;
                background-color: transparent;
                color: #ffffff;
                border: 1px solid #ff4c4c;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s, color 0.3s;
              "
              onmouseover="this.style.backgroundColor='#ff4c4c'; this.style.color='#ffffff';"
              onmouseout="this.style.backgroundColor='transparent'; this.style.color='#ffffff';"
            >
              Report Mistake
            </button>
            <button
              id="close-popup"
              style="
                padding: 10px 20px;
                background-color: transparent;
                color: #ffffff;
                text-decoration: underline;
                border: none;
                cursor: pointer;
              "
            >
              Visit Anyway
            </button>
          </div>
          <p style="margin-top: 20px;">&copy; 2024 NetScrape LTD. All rights reserved.</p>
        </div>
      </div>
    `;

    const popupDiv = document.createElement("div");
    popupDiv.innerHTML = popupHtml;
    document.body.appendChild(popupDiv);

    document.getElementById("close-popup").addEventListener("click", () => {
      document.getElementById("hello-world-popup").remove();
    });
  }
}

window.addEventListener("load", createPopup);
