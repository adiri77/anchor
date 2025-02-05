import { ConnectionProvider } from '@solana/wallet-adapter-react';
import React, { useMemo } from 'react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { endpoint } from '@/utils/constants';
// 👇 Add the following NEW import
import { GameProgramProvider } from '@/utils/game/useGame';

require('@solana/wallet-adapter-react-ui/styles.css');

type SolanaProvidersProps = {
    children: React.ReactNode;
}
const SolanaProviders = ({ children }: SolanaProvidersProps) => {
    const walletEndpoint = useMemo(() => endpoint, []);
    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
    ], [])

    return (
        <ConnectionProvider endpoint={walletEndpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <GameProgramProvider> {/* 👈 Add as innermost wrapper around children */}
                        {children}
                    </GameProgramProvider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default SolanaProviders;