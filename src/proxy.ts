// src/proxy.ts
export const config = {
  matcher: "/api/:path*",
};

export default async function proxy(request: Request) {
  const url = new URL(request.url);

  // Lógica de proteção de dados sensíveis e redirecionamento de API
  const response = await fetch(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });

  return response;
}