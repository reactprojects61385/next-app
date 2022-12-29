import Image from "next/image";

export default function Home() {
  const data = {
    src: "https://farm2.staticflickr.com/1522/26176404965_f2fd74e71d_k.jpg?momo_cache_bg_uuid=1eb982d1-dce2-462c-bdc4-cfc9a24e5f1d",
    alt: "dark_forest",
  };

  return (
    <>
      <h1>Forest</h1>
      <Image src={data.src} width={500} height={500} />
    </>
  );
}
