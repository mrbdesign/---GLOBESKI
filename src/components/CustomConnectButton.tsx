import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";
import { base } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: "126fdaa6ef43f1981d3f51661fc4a527",
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

interface CustomConnectButtonProps {
  className?: string;
}

export function CustomConnectButton({ className }: CustomConnectButtonProps) {
  return (
    <div className={className}>
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
    </div>
  );
}