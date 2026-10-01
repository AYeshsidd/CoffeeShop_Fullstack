const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface ApiError {
  status: number;
  message: string;
}

export default async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
  let message = `Request failed (${res.status})`;
  try {
    const body = await res.json();
    if (Array.isArray(body.detail)) {
      // FastAPI validation error format — array of {loc, msg, ...}
      message = body.detail
        .map((e: any) => `${e.loc?.[e.loc.length - 1]}: ${e.msg}`)
        .join(', ');
    } else if (typeof body.detail === 'string') {
      message = body.detail;
    }
  } catch {}
  throw { status: res.status, message } as ApiError;
}

if (res.status === 204) return undefined as T;
  return res.json();
}
