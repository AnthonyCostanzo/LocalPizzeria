const Hero = () => (
  <div
    className=" relative h-2/4 p-3 bg-cover bg-no-repeat flex space-y-3 flex-col items-center justify-center md:bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')",
    }}
  >
    <h1 className="text-3xl  selection:bg-slate-100 selection:text-slate-800">
      {"Nonna's Old Fashioned Pizza"}
    </h1>
    <h2 className="text-xl  selection:bg-slate-100 selection:text-slate-800">
      27 Brower Court, Staten Island Ny
    </h2>
    <button className="group transition-all duration-500 bg-slate-800 w-40 p-1 rounded hover:underline hover:text-white active:bg-slate-100 active:text-slate-800 hover:scale-125">
      Hours
      <div className="bg-slate-800 :active text-white hidden ease-in-out flex-col group-hover:block">
        <p>monday-friday: 11am-10pm</p>
        <p className="whitespace-no-wrap">weekends: 11am - 6pm</p>
      </div>
    </button>

    <button className="bg-slate-800 w-40 p-1 active:bg-slate-100 hover:text-white active:text-slate-800 rounded hover:underline hover:scale-125">
      Menu
    </button>
  </div>
);

export default Hero;
