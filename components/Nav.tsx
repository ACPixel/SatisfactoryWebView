import PowerOverview from "./Power/Overview";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary text-black p-4">
      <h1 className="text-xl font-bold">Satisfactory Remote Monitor</h1>

      <PowerOverview />
    </nav>
  );
}
