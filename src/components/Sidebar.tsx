import { useState, type ReactEventHandler } from "react";
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
        <SidebarCoin
          name="Solana"
          dropDownOnClick={(e:Event) => {
            e.stopPropagation();
            setSolDropDown((val) => !val);
          }}
          dropDown={solDropDown}
          accounts={accounts.SOL}
          addOnClick={(e: Event) => {
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
