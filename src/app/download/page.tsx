// src/pages/download.tsx
export default function DownloadPage() {
    return (
      <div>
        <h1>下载页面</h1>
        <p>在这里您可以下载最新的设备软件和固件更新。</p>
        <ul>
          <li><a href="/downloads/device-software-v1.0.zip" download>设备软件 v1.0</a></li>
          <li><a href="/downloads/device-firmware-v1.0.zip" download>设备固件 v1.0</a></li>
        </ul>
      </div>
    );
  }
  