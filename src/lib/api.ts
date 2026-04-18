export const API_BASE = import.meta.env.VITE_API_URL

if (!API_BASE) {
    throw new Error("API_BASE is not defined.")
}
