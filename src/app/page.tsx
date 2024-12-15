import Image from "next/image";
import CarParent from "./Components/Cars/CarParent";
import CarChild from "./Components/Cars/CarChild";

export default function Home() {
  return (
    <div>
      <CarParent/>
      {/* <CarChild/> */}
    </div>
  );
}
