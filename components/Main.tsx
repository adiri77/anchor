import React from 'react';
import CreateTokenButton from './SendTransactionButtons/CreateToken';
import TokenTable from './TokenTable';
import SendMemoButton from './SendTransactionButtons/SendMemo';

const Main = () => {
    return (
        <div>
            <h1>Solana Token Project</h1>
            <SendMemoButton message='Hello from QuickNode!' />
            <CreateTokenButton />
            <TokenTable />
        </div>
    );
}

export default Main;
