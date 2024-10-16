import url from "url";
import path from "path";
import express from "express";

const app = express();

// /test/mirrorエンドポイントを設定
app.use('/test/mirror', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.write(`${req.method} ${req.url} HTTP/${req.httpVersion}\r\n`);
    for (let [key, value] of Object.entries(req.headers)) {
        res.write(`${key}: ${value}\r\n`);
    }
    res.write('\r\n');
    // bodyが抜け漏れ
    req.pipe(res);
});

// /test/mirrorではない時は、指定されたファイルを提供
app.get('*', (req, res) => {
    // ch16/ex09/index.js
    const __filename = url.fileURLToPath(import.meta.url);
    // ch16/ex09
    const __dirname = path.dirname(__filename);
    // ch16/ex09/〇〇
    const filePath = path.join(__dirname, process.argv[2]); 
    // switch (path.extname(filename)) {
    //     case ".html":
    //     case ".htm": type = "text/html"; break;
    //     case ".js": type = "text/javascript"; break;
    //     case ".css": type = "text/css"; break;
    //     case ".png": type = "image/png"; break;
    //     case ".txt": type = "text/plain"; break;
    //     default: type = "application/octet-stream"; break;
    // }
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.sendFile(filePath);
});

const port = parseInt(process.argv[3]) || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

export default app;