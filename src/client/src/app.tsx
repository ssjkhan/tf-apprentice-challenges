import OksanaCard from "./components/Oksana";
export function App() {
  return (
    <div className="w-screen h-screen flex bg-red-500">
      Clean App
      <div className="mx-auto my-auto pb-16 text-white text-2xl">
        <OksanaCard />
        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
      </div>
    </div>
  );
}
