## Subgraph for Async.Art

Subgraph for indexing the events from the cool crypto art platform [Async.Art](https://async.art/)!!!

### Initializing the Graph Project

Install Graph CLI:

```
yarn global add @graphprotocol/graph-cli
```

Initialize a subgraph project:

```
graph init \
--from-contract 0x6c424C25e9F1ffF9642cB5B7750b0Db7312c29ad \
--network mainnet \
--abi ./ethereum/asyncart-abi.json \
ehsueh/async-art-subgraph
```

On Rinkeby testnet:

```
graph init \
--from-contract 0x8e18b2a411a086ad41ad68953c9fe47b11914335 \
--network rinkeby \
--abi ./ethereum/asyncart-abi.json \
ehsueh/async-art-subgraph
```

### Add Access Token 

1. Set up a Graph Explorer account and retrieve the token from the [dashboard](https://thegraph.com/explorer/dashboard) 
2. Save the access token.
```
graph auth https://api.thegraph.com/deploy/ <ACCESS_TOKEN>
```
Note: you might need to install `libsecret-1-dev` first.
```
sudo apt install libsecret-1-dev
```
If that doesn't work, you can still run without stored key (and just pass the token in every time. See below in the deploy section.)
3. Add the subgraph by following the instructions [here](https://thegraph.com/docs/deploy-a-subgraph#create-the-subgraph).

### Generate Codes or Build

```
yarn codegen
```

``` 
yarn build
```

### Deploy or Redeploy

Upload subgraph files to IPFS and trigger the Graph Explorer to start indexing.

```
yarn deploy 
```

Or

```
graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ ehsueh/async-art-subgraph --access-token <ACCESS_TOKEN>
```

### Example GraphQL Queries

Get current platform information.
```
{
  platforms(first: 5) {
    id
    address
    totalSale
    totalSaleInEth
    platformFirstSalePercentage
    platformSecondSalePercentage
    artistSecondSalePercentage
  }
}
```

Get artist or collector addresses associated with the platform and the bids they proposed, the tokens they created and the tokens they own.
```
{
  accounts(first: 5) {
		address
    bids {
      timestamp
    }
    created {
      tokenId
    }
    owns {
      tokenId
    }
  }
}
```

Get recently minted tokens!
```
{
  tokens(first: 10, orderBy: created, orderDirection: desc) {
    id
    uri
    tokenId
    created
    lastTransfer {
      from
      to
    }
    allTransfers {
      id
    }
    allBids {
      id
    }
  }
}
```

Get a log of sales events
```
{
  saleLogs(first: 10, orderBy: timestamp, orderDirection: desc) {
		timestamp
    amountInEth
    token {
      id
    } 
    buyer {
      address
    }
    seller{
      address
    }
  }
}
```