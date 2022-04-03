import Head from "next/head";
import useSWR from "swr";
import Item from "../components/Item";
import Nav from "../components/Nav";

export default function Home() {
  const { data, error } = useSWR(
    "http://127.0.0.1:8080/getProdStats",
    (url) => fetch(url).then((r) => r.json()),
    {
      refreshInterval: 1000,
    }
  );

  return (
    <div>
      <Head>
        <title>Satisfactory Viewer</title>
        <meta name="description" content="View satisfactory stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav />
        <div className="flex flex-wrap justify-center">
          {data?.map(
            ({
              ItemName,
              CurrentProd,
              MaxProd,
              CurrentConsumed,
              MaxConsumed,
            }) => (
              <Item
                key={ItemName}
                name={ItemName}
                currentProduction={CurrentProd}
                maxProduction={MaxProd}
                currentConsumption={CurrentConsumed}
                maxConsumption={MaxConsumed}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}
