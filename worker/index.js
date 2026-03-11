/**
 * Cloudflare Worker для Korrekciya Fotografiy
 * API-эндпоинты и служебные функции
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders(),
      });
    }

    // Health check
    if (url.pathname === "/" || url.pathname === "/health") {
      return jsonResponse({
        ok: true,
        service: "pro-it-tech-api",
        env: env.ENVIRONMENT || "production",
        timestamp: new Date().toISOString(),
      });
    }

    // API info
    if (url.pathname === "/api/info") {
      return jsonResponse({
        version: "1.0",
        endpoints: ["/", "/health", "/api/info"],
        description: "API для Pro IT Tech — коррекция фотографий",
      });
    }

    return jsonResponse({ error: "Not found" }, 404);
  },
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(),
    },
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}
