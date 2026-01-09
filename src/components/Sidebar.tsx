import { useState } from "react";
import { WalletIcon } from "./icons/Wallet";
import { SidebarAccount } from "./SidebarAccount";
import { EthIcon, SolanaIcon } from "./icons/Icons";

interface SidebarType {
  accounts: {
    SOL: {
      path: string;
      name: string;
      publicKey: string;
      privateKey: string;
    }[];
    ETH: {
      path: string;
      name: string;
      publicKey: string;
      privateKey: string;
    }[];
  };
  generateSolanaWallet: any;
  generateEthereumWallet: any;
}

export const Sidebar = ({
  accounts,
  generateSolanaWallet,
  generateEthereumWallet,
}: SidebarType) => {
  const [solDropDown, setSolDropDown] = useState<boolean>(true);
  const [ethDropDown, setEthDropDown] = useState<boolean>(true);

  return (
    <div className="">
      <div className="m-2 p-1">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-green-950 rounded-lg shadow-[0_0_40px_rgba(34,197,94,0.3)]">
            <div className="text-green-300">
              <WalletIcon size="20" />
            </div>
          </div>
          <div className="font-semibold tracking-wide">
            <div>CryptoVault</div>
            <div className="text-xs text-neutral-600">HD Wallet</div>
          </div>
        </div>
      </div>
      <div className="w-full border border-t-0 border-neutral-800"></div>
      {/* Wallets */}
      <div className="m-4">
          <div className="mb-4 text-neutral-400 tracking-wider text-xs font-semibold">WALLETS</div>
        <SidebarAccount
          name="Solana"
          dropDownOnClick={() => {
            setSolDropDown((val) => !val);
          }}
          dropDown={solDropDown}
          accounts={accounts.SOL}
          addOnClick={() => generateSolanaWallet()}
          Logo={<SolanaIcon size="24"/>}
        />
        <SidebarAccount
          name="Ethereum"
          dropDownOnClick={() => {
            setEthDropDown((val) => !val);
          }}
          dropDown={ethDropDown}
          accounts={accounts.ETH}
          addOnClick={() => generateEthereumWallet()}
          Logo={<EthIcon size="24"/>}
        />
      </div>
    </div>
  );
};
