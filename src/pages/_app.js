import { OctokitProvider } from "@/context/octokit/provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <OctokitProvider>
      <Component {...pageProps} />
    </OctokitProvider>
  );
}
