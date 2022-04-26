interface ItemProps {
  name: string;
  currentProduction: number;
  maxProduction: number;
  currentConsumption: number;
  maxConsumption: number;
}

function Image(props: { src: string }) {
  const path = props.src.toLowerCase().replace(/\s/g, "-") + "_256.png";
  return <img src={`items/${path}`} className="h-24 w-24" />;
}

export default function Item({
  name,
  currentProduction,
  maxProduction,
  currentConsumption,
  maxConsumption,
}: ItemProps) {
  return (
    <div className="p-4 rounded-md bg-neutral-800 m-2 aspect-square w-64 h-64 relative overflow-clip">
      <div className="z-10 relative">
        <div className="flex justify-center">
          <Image src={name} />
        </div>
        <div className="flex justify-center">
          <div className="text-xl font-bold">{name}</div>
        </div>
        <div className="flex justify-center text-center text-green-500">
          Producing: {(currentProduction ).toFixed(1)} /m.
        </div>
        <div className="flex justify-center text-center text-green-500">
          Can produce: {(maxProduction ).toFixed(1)} /m.
        </div>
        <div className="flex justify-center text-center text-red-500">
          Consuming: {(currentConsumption ).toFixed(1)} /m.
        </div>
        <div className="flex justify-center text-center text-red-500">
          Can consume: {(maxConsumption ).toFixed(1)} /m.
        </div>
      </div>

      <div className="absolute top-0 left-0 bottom-0 right-0 bg-red-500 z-0 opacity-25">
        <div
          className="absolute bottom-0 left-0 w-full bg-green-500 transition-all ease-in-out duration-300"
          style={{ height: `${(currentProduction / maxProduction) * 100}%` }}
        />
      </div>
    </div>
  );
}
