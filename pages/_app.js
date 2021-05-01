import "tailwindcss/tailwind.css";

export function reportWebVitals(metric) {
  if (metric.label === "custom") {
    console.log("\n\ntime:", metric.value, "\n\n");
  }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
