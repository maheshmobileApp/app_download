import { useEffect, type JSX } from "react";

const androidLink: string =
  "https://play.google.com/store/apps/details?id=com.dentalinterface360.app";

const iosLink: string =
  "https://apps.apple.com/app/id6755395052";

const detectDevice = (): "android" | "ios" | "desktop" => {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes("android")) return "android";
  if (ua.includes("iphone") || ua.includes("ipad")) return "ios";

  return "desktop";
};
export default function Download(): JSX.Element {

  useEffect(() => {
    const device = detectDevice();

    if (device === "android") {
      window.location.href = androidLink;
    }

    if (device === "ios") {
      window.location.href = iosLink;
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h1>Download Our App 📱</h1>

      <p>If you are not redirected, select your device</p>

      <div style={{ marginTop: 30 }}>

        <a
          href={iosLink}
          style={{
            padding: "12px 20px",
            background: "#000",
            color: "#fff",
            borderRadius: 8,
            marginRight: 10,
            textDecoration: "none"
          }}
        >
          Download for iPhone
        </a>

        <a
          href={androidLink}
          style={{
            padding: "12px 20px",
            background: "#34A853",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none"
          }}
        >
          Get it on Google Play
        </a>

      </div>
    </div>
  );
}