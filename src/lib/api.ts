export const API_BASE = import.meta.env.PROD
    ? "/api/v1"
    : import.meta.env.VITE_API_URL || "http://1e14c3489fcb.vps.myjino.ru:5000/api/v1"

export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL || ""
