import { createThirdwebClient } from "thirdweb";
import { ConnectButton, TransactionButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";
import { base } from "thirdweb/chains";


const client = createThirdwebClient({
  clientId: "126fdaa6ef43f1981d3f51661fc4a527", // Replace with your actual client ID
});

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "email",
        "passkey",
        "phone",
        "apple",
        "x",
      ],
    },
  }),
];

export function CustomConnectButton() {
    return (
      <ConnectButton
        client={client}
        wallets={wallets}
        accountAbstraction={{
          chain: base,
          sponsorGas: true,
        }}
        connectModal={{
          size: "compact",
          title: "Sign in サインイン",
          showThirdwebBranding: false,
        }}
      />
    );
  }
