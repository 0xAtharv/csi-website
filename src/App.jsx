import "./App.css";
import Card from "./components/card";
import Pop from "./components/modal";
import { data } from "./components/data";

export default function App() {
  return (
    <div id='main' className=" mx-0 my-0 px-4 py-4  bg-[#2E243c] overflow-hidden  relative">
      <div id="pop">
        <Pop 
          title = "ABX"
          detail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"

        />
      </div>
      
      <h2 className="text-center text-xl font-bold md:text-[60px] md:my-16 text-white">EVENTS</h2>
      
      <div id='row' className='flex flex-col justify-between items-center lg:flex-row flex flex-wrap shrink-0'>
        {
          data.map( (d) => (
            <Card data={d} />

          ))
        }
      </div>
    </div>
  );
}


