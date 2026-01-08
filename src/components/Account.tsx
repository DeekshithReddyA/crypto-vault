export const Account = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/3">
                <div className="flex justify-between">
                    <div>
                        Account
                    </div>
                    <div>
                        ...
                    </div>
                </div>
                <div>
                    Dmqasjhdf....as
                </div>
                <div>
                    Derivation m/44'/1'/0
                </div>

                <div className="m-2 p-5 bg-gray-800">
                    <div>
                        Balance
                    </div>
                    <div className="flex space-x-2">
                        <div>
                            Send
                        </div>
                        <div>
                            Receive
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-gray-800">
                    <div>
                        Wallet Keys
                    </div>
                    <div className="">
                        <div>
                            Public Key
                        </div>
                        <div>
                            Private Key
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}