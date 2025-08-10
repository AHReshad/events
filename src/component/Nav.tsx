export default function Nav() {
  return (
    <div className="bg-black text-white flex justify-between px-[72px] py-[22px]  items-center">
        <div>
            <h1 className=" text-[18px] font-bold ">LocalEventFinder</h1>
        </div>

        <div className="flex gap-[32px] items-center">
            <h1 className="cursor-pointer">Home</h1>
            <h1 className="cursor-pointer">Events</h1>
            <h1 className="cursor-pointer">Categories</h1>
            <h1 className="cursor-pointer">Submit Event</h1>
            <h1 className="cursor-pointer"> Contact us</h1>
            <button className=" bg-[#268CF5] py-[9px] px-[16px] rounded-2xl">Login/Signup</button>
        </div>
    </div>
  )
}
