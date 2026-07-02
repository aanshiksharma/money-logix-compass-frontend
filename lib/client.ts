const API_URL = "http://localhost:5000/";

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);

    throw new Error(
      body?.message ?? body?.error ?? `Request failed (${response.status})`,
    );
  }

  return response.json() as Promise<T>;
}
