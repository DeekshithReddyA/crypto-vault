import { KeyIcon, LogoutIcon } from "./icons/Icons";

interface NavbarType {
  seedPhrase: string;
  setIsInitialised: any;
}

export const Navbar = ({ seedPhrase, setIsInitialised }: NavbarType) => {
  return (
    <div className="h-16 flex justify-end items-center">
      <div className="flex gap-2">
        <div className="flex px-4 py-2 hover:bg-violet-800/90 cursor-pointer rounded-xl justify-center items-center gap-1">
        <div className="">
            <KeyIcon size="16" />
        </div>
        <div>
          View Seed
        </div>
        </div>
        <div className="flex items-center gap-1 px-4 py-2 mr-2 text-red-500 hover:bg-red-800/10 cursor-pointer rounded-xl"
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
            <div>
                Reset
            </div>
        </div>
      </div>
    </div>
  );
};
