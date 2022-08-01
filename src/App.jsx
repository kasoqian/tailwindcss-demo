import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="container m-auto mt-3 ">
      <div className="flex justify-between bg-gray-800 pl-10 pr-10 pt-5 pb-5 rounded shadow-md text-white">
        <div className="flex items-center space-x-10">
          <div className=" bg-white rounded-full p-2 w-12 h-12 flex items-center">
            <img
              className="w-auto hover:animate-spin duration-1000"
              src={reactLogo}
            ></img>
          </div>
          <div className="cursor-pointer hover:shadow-sm hover:shadow-white opacity-80 pl-2 pr-2 rounded-md hover:underline font-bold hover:text-cyan-100 active:text-blue-500">
            React
          </div>
          <div className="cursor-pointer hover:shadow-sm hover:shadow-white opacity-80 pl-2 pr-2 rounded-md hover:underline font-bold hover:text-cyan-100 active:text-blue-500">
            Home
          </div>
          <div className="cursor-pointer hover:shadow-sm hover:shadow-white opacity-80 pl-2 pr-2 rounded-md hover:underline font-bold hover:text-cyan-100 active:text-blue-500">
            News
          </div>
          <div className="cursor-pointer hover:shadow-sm hover:shadow-white opacity-80 pl-2 pr-2 rounded-md hover:underline font-bold hover:text-cyan-100 active:text-blue-500">
            Team
          </div>
          <div className="cursor-pointer hover:shadow-sm hover:shadow-white opacity-80 pl-2 pr-2 rounded-md hover:underline font-bold hover:text-cyan-100 active:text-blue-500">
            Footer
          </div>
        </div>
        <div className="flex space-x-10 items-center">
          <div className="cursor-pointer hover:shadow-sm hover:shadow-white opacity-80 pl-2 pr-2 rounded-md font-bold">
            ICON
          </div>
          <div className="cursor-pointer hover:shadow-sm hover:shadow-white opacity-80 pl-2 pr-2 rounded-md font-bold">
            Avator
          </div>
        </div>
      </div>
      <div className=" bg-gray-500  mt-3  rounded text-white p-5">test</div>
    </div>
  );
}

export default App;
