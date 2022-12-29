import { useRouter } from "next/router";

export default function Post({ pid }) {
  const router = useRouter();

  return (
    <>
      <span>post id: {pid}</span>
      <br />
      <br />
      <button onClick={() => router.push("/")}>Go Home</button>
    </>
  );
}

export async function getServerSideProps(context) {
  const { pid } = context.query;

  return {
    props: {
      pid,
    },
  };
}
