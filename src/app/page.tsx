import SearchBar from "@/components/SearchBar/SearchBar";
import SearchCar from "@/components/SearchCar/SearchCar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 gap-4">
      <SearchCar />
    </main>
  );
}
