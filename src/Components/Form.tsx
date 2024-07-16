export default function Form() {
  return (
    <div className=" bg-menuBg w-4/5  flex flex-col p-7 gap-[5rem] rounded-[1rem]">
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
              <input type="text" className="w-[85%] ml-5 h-[2rem]" />
            </>
          ))}
        </div>

        <button className="p-2 bg-cardBg w-[25%] self-center text-softBlue rounded-[0.5rem]">
          Submit
        </button>
      </form>
      <footer className="flex flex-col gap-[3rem]">
        <p className="text-softBlue">
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
