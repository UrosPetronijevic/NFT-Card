import HookLeft from "./HookLeft";
import HookRight from "./HookRight";

export default function TextBox() {
  return (
    <div className="w-4/12 h-[15%] flex flex-col items-center border-cyan-300 border-2 shadow-custom-cyan backdrop-blur-lg bg-cardBg/30">
      <div className="w-[80%] h-[10%] flex justify-between">
        {[1, 2, 3].map(() => (
          <div className="w-[20%] h-[40%] bg-cyan-300 translate-y-[-100%]"></div>
        ))}
      </div>

      <div className="w-[100%] h-[80%] flex ">
        <div className="w-[15%] flex items-center">
          <HookLeft />
        </div>
        <div className="w-[70%] text-wrap text-cyan-200 text-[.625rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          debitis unde numquam porro consectetur in eveniet provident!
        </div>
        <div className="w-[15%] flex items-center justify-end">
          <HookRight />
        </div>
      </div>

      <div className="w-[80%] h-[10%] flex justify-between items-end">
        {[1, 2, 3].map(() => (
          <div className="w-[20%] h-[40%] bg-cyan-300 translate-y-[100%]"></div>
        ))}
      </div>
    </div>
  );
}
