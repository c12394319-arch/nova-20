// ── Static proxy config — DO NOT change prefix/bare paths ────────────────────
// Clients and the service worker both depend on /a/ and /ca/ being stable.
// Changing these would break existing sessions and cached service workers.
self.__uv$config = {
  prefix: "/a/",
  bare: "https://uv.holyubofficial.net/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/assets/mathematics/handler.js?v=9-30-2024",
  bundle: "/assets/mathematics/bundle.js?v=9-30-2024",
  config: "/assets/mathematics/config.js?v=9-30-2024",
  sw: "/assets/mathematics/sw.js?v=9-30-2024",
};
