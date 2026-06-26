// Tiny zero-dependency static server for the built Vite SPA (web/dist).
// Railway provides PORT; we serve the dashboard and fall back to index.html for SPA routes.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "web", "dist");
const PORT = process.env.PORT || 8080;

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".woff2": "font/woff2", ".woff": "font/woff", ".map": "application/json",
};

async function serveFile(res, filePath) {
  const data = await readFile(filePath);
  res.writeHead(200, { "content-type": TYPES[extname(filePath)] || "application/octet-stream" });
  res.end(data);
}

createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    let filePath = join(ROOT, urlPath === "/" ? "index.html" : urlPath);
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end("forbidden"); }
    try {
      const s = await stat(filePath);
      if (s.isDirectory()) filePath = join(filePath, "index.html");
      await serveFile(res, filePath);
    } catch {
      await serveFile(res, join(ROOT, "index.html")); // SPA fallback
    }
  } catch (e) {
    res.writeHead(500); res.end("error: " + e.message);
  }
}).listen(PORT, () => console.log(`Retro app on :${PORT}`));
