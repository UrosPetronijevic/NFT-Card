export default function Form() {
  return (
    <div className=" bg-menuBg w-4/5  flex flex-col p-8 gap-[5rem]">
      <header className=" flex items-center justify-center">
        <h1 className=" text-5xl font-bold ">Form</h1>
      </header>
      <form className="flex flex-col gap-4 justify-center">
        <div className="mb-5 flex flex-col gap-5">
          {["NFT", "AMOUNT", "ACCOUNT"].map((e) => (
            <>
              <h3 className="text-cyan-300">{e}</h3>
              <input type="text" className="w-[85%] ml-5" />
            </>
          ))}
        </div>

        <button className="p-2 bg-cardBg w-[25%] self-center text-softBlue">
          Submit
        </button>
      </form>
      <footer className="flex flex-col gap-[4rem]">
        <p className="text-softBlue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          distinctio, vero ducimus, vitae saepe minus numquam commodi eaque non
          quod voluptates ratione animi ipsam laboriosam tenetur. Molestias
          ullam libero rerum?
        </p>
        <div className="flex text-softBlue justify-between">
          <span>logo</span>
          <p className="text-cyan-300">{`All rights reserved to the author: Author`}</p>
        </div>
      </footer>
    </div>
  );
}
