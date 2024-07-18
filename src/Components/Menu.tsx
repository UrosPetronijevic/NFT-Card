import Blob from "../assets/movidmo.gif";

export default function Menu() {
  return (
    <div className="  w-4/5 h-full relative flex justify-center items-center">
      {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#F1C21B"
          d="M21.7,-40C31.3,-32.1,44.5,-32.7,46.2,-27.4C48,-22.2,38.4,-11.1,38.5,0C38.5,11.1,48.2,22.3,45.5,26C42.8,29.6,27.8,25.9,18.2,31.1C8.5,36.4,4.3,50.6,-3.3,56.4C-10.9,62.2,-21.9,59.5,-28.6,52.6C-35.4,45.7,-38,34.6,-39.4,25.1C-40.8,15.6,-41,7.8,-40.8,0.1C-40.7,-7.7,-40.3,-15.3,-36.8,-21.3C-33.4,-27.2,-27,-31.4,-20.3,-41C-13.7,-50.7,-6.8,-65.8,-0.4,-65.1C6.1,-64.4,12.1,-47.9,21.7,-40Z"
          transform="translate(100 100)"
        />
      </svg> */}
      <img src={Blob} alt="Animated blob" />
      <div className=" w-full bg-white/10 shadow-[0_3px_10px_rgb(0,0,0,0.5)] h-5/6 absolute z-10 backdrop-blur-md border border-white flex flex-col text-blue-900/70 rounded-[1rem] justify-between">
        <div className="w-full bg-white/30 h-[5%] rounded-t-[1rem]"></div>

        <ul className="flex flex-col justify-between h-[30%] mb-[10%] pl-7">
          {["NFT :", "Amount :", "User :"].map((e) => (
            <li>{e}</li>
          ))}
        </ul>
        <div className="h-[1fr]"></div>
        <div className="w-full bg-white/30 h-[5%] rounded-b-[1rem]"></div>
      </div>
    </div>
  );
}
