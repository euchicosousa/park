import { useEffect } from "react";

export default function Delivery() {
  useEffect(() => {
    location.href = "https://maps.app.goo.gl/PAUtxtJBSXKBLFp39";
  }, []);

  return (
    <div className="grid w-screen text-center h-screen place-content-center p-8 text-sobral bg-familia">
      <div className="mb-8">
        Estamos te levando <br /> para o mapa com a nossa{" "}
        <strong>LOCALIZAÇÃO...</strong>
      </div>
      <img
        src="/loader.png"
        alt="Estamos te levando para o mapa com a nossa Localização Delivery..."
        className="animate-spin mx-auto w-12"
      />
    </div>
  );
}
