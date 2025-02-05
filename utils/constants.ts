import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Cluster, PublicKey, clusterApiUrl } from "@solana/web3.js";
export const cluster: Cluster = process.env.NEXT_PUBLIC_CLUSTER as Cluster || 'devnet';
export const endpoint: string = process.env.NEXT_PUBLIC_URL || clusterApiUrl(WalletAdapterNetwork.Devnet);
// ALTERNATE FOR LOCAL TESTING
// export const endpoint: string = 'http://127.0.0.1:8899';

export const SEEDS: { [key: string]: Buffer } = {
    player: Buffer.from("player"),
    mint: Buffer.from("play_token_mint"),
    programState: Buffer.from("program_state"),
    game: Buffer.from("new_game"),
};

// Make sure to replace the .env and fallback with your own program address
const programAddress: string = process.env.NEXT_PUBLIC_PROGRAM_ADDRESS || 'GXD96UrnhWZKJcVtXDcV8Q6NphEvYUJt1Ybem8PteM1E';
export const PROGRAM_ID: PublicKey = new PublicKey(programAddress);