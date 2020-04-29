## Subgraph for Async.Art

### Initialzing the graph project

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

### Add access token 

1. Set up a Graph Explorer account and retrieve the token from the [dashboard](https://thegraph.com/explorer/dashboard) 
2. graph auth https://api.thegraph.com/deploy/ <ACCESS_TOKEN>
3. Add the subgraph by following the instructions [here](https://thegraph.com/docs/deploy-a-subgraph#create-the-subgraph).

### Build

``` 
yarn build
```

### Deploy or Redeploy

Upload subgraph files to IPFS and trigger the Graph Explorer to start indexing.

```
yarn deploy 
```