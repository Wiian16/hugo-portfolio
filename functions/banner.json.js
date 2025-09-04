export async function onRequest(context) {
  const { env } = context;

  // KV value (defaults to false if not set)
  const value = await env.MAINTENANCE.get("enabled");
  const message = await env.MAINTENANCE.get("message");
  const enabled = value === "true";

  return new Response(
    JSON.stringify({
      maintenance: enabled,
      message: message,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}

