import { KeyIcon, LogoutIcon } from "./icons/Icons";

interface NavbarType {
  setIsInitialised: any;
  setSeedModal : any
}

export const Navbar = ({ setIsInitialised, setSeedModal }: NavbarType) => {
  return (
    <div className="h-16 flex justify-end items-center">
      <div className="flex gap-2">
        <div className="flex px-4 py-2 hover:bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer rounded-xl justify-center items-center gap-2 transition-all"
        onClick={()=>{setSeedModal(true)}}>
          <div className="">
            <KeyIcon size="16" />
          </div>
          <div className="font-medium">View Seed</div>
        </div>
        <div
          className="flex items-center gap-2 px-4 py-2 mr-4 text-rose-500 hover:bg-rose-500/10 hover:text-rose-400 cursor-pointer rounded-xl transition-all"
          onClick={() => {
            window.localStorage.setItem("isInitialised", "false");
            window.localStorage.removeItem("mnemonic");
            window.localStorage.removeItem("accounts");
            setIsInitialised(false);
          }}
        >
          <div>
            <LogoutIcon size="16" />
          </div>
          <div>Reset</div>
        </div>
      </div>
    </div>
  );
};
