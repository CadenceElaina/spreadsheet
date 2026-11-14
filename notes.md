Do not import the .env file; read it directly from the global object provided by your bundler.
const apiUrl = import.meta.env.VITE_API_URL;

React build tools require a specific prefix so you don't accidentally leak server-side secrets into the browser bundle. Variables without the prefix are ignored in frontend code.
VITE_API_URL=https://api.example.com
VITE_STRIPE_PUBLIC_KEY=pk_test_12345
