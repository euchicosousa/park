import { useEffect } from "react";

export default function HappyHour() {
  useEffect(() => {
    location.href =
      "https://drive.google.com/file/d/1lBA2LJZR71kLi0F1D-FFqnlzaUldX3fz/view?usp=drive_link";
  }, []);

  return (
    <div className="grid w-screen text-center h-screen place-content-center p-8 text-sobral bg-familia">
      <div className="mb-8">
        Estamos te levando <br /> para o nosso <strong>CARDÁPIO...</strong>
      </div>
      <img
        src="/loader.png"
        alt="Estamos te levando para o nosso cardápio..."
        className="animate-spin mx-auto w-12"
      />
    </div>
  );
}
