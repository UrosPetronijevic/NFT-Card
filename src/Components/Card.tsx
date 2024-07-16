import NftImg from ".././assets/image-equilibrium.jpg";
import profilePic from ".././assets/image-avatar.png";

export default function Card() {
  return (
    <div className=" bg-cardBg  w-3/5 flex flex-col p-7 gap-5 rounded-[1rem]">
      <img src={NftImg} className=" rounded-lg" />
      <h1 className=" text-cyan-300 font-bold text-2xl">Equilibrium #3429</h1>
      <p className="text-softBlue">
        Our equilibrium collection promotes balance and calm
      </p>
      <div className=" border-b-line flex justify-between border-b-[1px] p-2 ">
        <p className=" text-cyan-300 font-bold">
          <span></span>
          0.041 ETH
        </p>

        <p className=" text-softBlue">
          <span></span>3 days left
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img src={profilePic} className=" w-10" />
        <p className=" text-softBlue flex gap-1">
          Creation of
          <span className="text-cyan-300 font-bold">Uros Petronijevic</span>
        </p>
      </div>
    </div>
  );
}
