const PORT = 3000;
const BASE_URL = process.env.BASE_URL;
const localhost = `http://localhost:${PORT || process.env.PORT || 3000}`;

export { PORT, BASE_URL, localhost };