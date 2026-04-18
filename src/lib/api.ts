export const API_BASE = import.meta.env.VITE_API_URL
export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL

if (!API_BASE) {
    throw new Error("API_BASE is not defined.")
}

if (!PUBLIC_URL) {
    throw new Error("PUBLIC_URL is not defined.")
}
