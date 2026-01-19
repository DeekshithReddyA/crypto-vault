import { useState } from "react";
import { WalletIcon } from "./icons/Wallet";
import { SidebarCoin } from "./SidebarCoins";
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
  selectedAccount : {};
  setSelectedAccount : any;
}

export const Sidebar = ({
  accounts,
  generateSolanaWallet,
  generateEthereumWallet,
  selectedAccount,
  setSelectedAccount
}: SidebarType) => {
  const [solDropDown, setSolDropDown] = useState<boolean>(false);
  const [ethDropDown, setEthDropDown] = useState<boolean>(false);

  return (
    <div className="">
      <div className="m-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
            <div className="text-indigo-400">
              <WalletIcon size="24" />
            </div>
          </div>
          <div className="font-bold tracking-tight">
            <div className="text-zinc-100 text-lg">CryptoVault</div>
            <div className="text-xs text-zinc-500 font-medium tracking-wider">HD WALLET</div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-zinc-900"></div>
      {/* Wallets */}
      <div className="m-4">
          <div className="mb-4 text-zinc-500 tracking-wider text-xs font-bold pl-2">WALLETS</div>
        <SidebarCoin
          name="Solana"
          dropDownOnClick={(e:Event) => {
            e.stopPropagation();
            setSolDropDown((val) => !val);
          }}
          dropDown={solDropDown}
          accounts={accounts.SOL}
          addOnClick={() => {
            generateSolanaWallet();
          }}
          Logo={<SolanaIcon size="24"/>}
          selectedAccount={selectedAccount}
          setSelectedAccount={setSelectedAccount}
        />
        <SidebarCoin
          name="Ethereum"
          dropDownOnClick={() => {
            setEthDropDown((val) => !val);
          }}
          dropDown={ethDropDown}
          accounts={accounts.ETH}
          addOnClick={(e : Event) => {
            e.stopPropagation();
            generateEthereumWallet();
          }}
          Logo={<EthIcon size="24"/>}
          selectedAccount={selectedAccount}
          setSelectedAccount={setSelectedAccount}

        />
      </div>
    </div>
  );
};
