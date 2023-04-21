import KiraCard from "./components/Kira";
import SaadCard from "./components/Saad";

export function App() {
  return (
      <div className="w-screen h-screen flex bg-red-500">
      <div className="mx-auto my-auto pb-16 text-white text-2xl">
        Clean App
      
        <SaadCard />
      <KiraCard />
      </div>
    </div>
  );
}
