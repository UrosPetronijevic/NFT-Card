export default function Form() {
  return (
    <div className=" bg-menuBg/40 w-4/5  flex flex-col p-7 gap-[5rem] rounded-[1rem] shadow-[0_3px_10px_rgb(0,0,0,0.5)] border border-gray-700 backdrop-blur-md">
      <header className=" flex items-center justify-center">
        <h1 className=" text-5xl font-bold text-cyan-300">Form</h1>
      </header>
      <form
        className="flex flex-col gap-4 justify-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-5 flex flex-col gap-5">
          {["NFT", "AMOUNT", "ACCOUNT"].map((e) => (
            <>
              <h3 className="text-cyan-300">{e}</h3>
              <input
                type="text"
                className="w-[85%] ml-5 h-[2rem] rounded-[.3rem]"
              />
            </>
          ))}
        </div>

        <button className="p-2 bg-cardBg w-[25%] self-center text-softBlue rounded-[0.5rem] hover:text-cardBg hover:bg-orange-200 duration-200">
          Submit
        </button>
      </form>
      <footer className="flex flex-col gap-[3rem]">
        <p className="text-cardBg/70">
          Welcome to NFT's Inc, pioneers in the NFT marketplace. We offer unique
          digital assets and unparalleled customer service. Your satisfaction is
          our commitment. By using our platform, you agree to our terms and
          conditions.
        </p>
        <div className="flex text-softBlue justify-between">
          <span>logo</span>
          <p className="text-cyan-300">{`All rights reserved to the author: Author`}</p>
        </div>
      </footer>
    </div>
  );
}
