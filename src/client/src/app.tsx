import SaadCard from "./components/Saad";
import AnastasiiaCard from '../components/Anastasiia'
import OksanaCard from "./components/Oksana";

export function App() {
  return (
    <div className="w-screen h-screen flex bg-red-500">
      <div className="mx-auto my-auto pb-16 text-white text-2xl">
        Clean App
        <SaadCard />
        <AnastasiiaCard />
        <OksanaCard />
      </div>
    </div>
  );
}
