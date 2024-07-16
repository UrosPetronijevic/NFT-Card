import Card from "./Components/Card";
import Form from "./Components/Form";
import Menu from "./Components/Menu";
export default function App() {
  return (
    <div className=" bg-mainBg h-screen grid grid-cols-3 w-screen p-8 place-items-center font-serif">
      <Form />
      <Card />
      <Menu />
    </div>
  );
}
