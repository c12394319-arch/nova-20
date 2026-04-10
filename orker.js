export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve all static assets (including /sw.js, /config.js, etc.)
    const assetRes = await env.ASSETS.fetch(request);
    if (assetRes.status !== 404) return assetRes;

    // Fallback: serve index.html for SPA routing
    return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
  }
};
