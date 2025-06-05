import profileicon from "../assets/profile-img.png";

export const LiveAvatar = () => {
  return (
    <div className="relative inline-block">
      <img
        src={profileicon}
        alt="profile img icon"
        className="h-9 w-9 sm:w-11 sm:h-11 lg:h-14 lg:w-14 xl:h-[40px] xl:w-[40px] rounded-full object-contain"
        loading="lazy"
      />

      {/* Live badge */}
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-[#915eff]  ring-2 ring-white animate-ping" />
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-[#915eff] ring-2 ring-white" />
    </div>
  );
};
