import getNumber from "./server-actions/number";

export default async function Home() {
  const query = await getNumber();
  return (
    <main className="flex justify-center">Hola deploy in port {query}</main>
  );
}
