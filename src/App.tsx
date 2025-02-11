import Card from "./Components/Card";
import Form from "./Components/Form";
import Menu from "./Components/Menu";
import TextBox from "./Components/TextBox";
export default function App() {
  return (
    <div className="  h-screen grid grid-cols-3 w-screen p-8 place-items-center font-serif bg-gradient-to-tl from-blue-900 via-red-400 to-blue-900 ">
      <Form />
      <Card />
      <Menu />
      {/* <TextBox /> */}
    </div>
  );
}
