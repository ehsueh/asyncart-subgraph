import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Approval,
  ApprovalForAll,
  BidProposed,
  BidWithdrawn,
  BuyPriceSet,
  ControlLeverUpdated,
  PlatformAddressUpdated,
  RoyaltyAmountUpdated,
  TokenSale,
  Transfer
} from "../generated/Contract/Contract"
import { Platform, Token, Account, SaleLog, BidLog, TransferLog } from "../generated/schema"
import { loadOrCreateAccount, loadOrCreatePlatform, loadOrCreateToken} from "./factory"

const PLATFORM_ID = "async-art-1.0"
const GENESIS_ADDRESS = '0x0000000000000000000000000000000000000000'

export function handleApproval(event: Approval): void {
  // Note: Leaving the example docs here for people working with
  //       the graph for the first time. Can remove after.
  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.artistSecondSalePercentage(...)
  // - contract.balanceOf(...)
  // - contract.buyPrices(...)
  // - contract.expectedTokenSupply(...)
  // - contract.getApproved(...)
  // - contract.getControlToken(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.ownerOf(...)
  // - contract.pendingBids(...)
  // - contract.permissionedControllers(...)
  // - contract.platformAddress(...)
  // - contract.platformFirstSalePercentage(...)
  // - contract.platformSecondSalePercentage(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenDidHaveFirstSale(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
  // - contract.uniqueTokenCreators(...)
  // - contract.whitelistedCreators(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBidProposed(event: BidProposed): void {

  let tokenId = event.params.tokenId
  let timestamp = event.block.timestamp
  let token = loadOrCreateToken(tokenId)

  if (token != null) {

    // Get the bidder or create if doesn't already exist
    let bidder = loadOrCreateAccount(event.params.bidder)

    // Create a new bid log entry with tokenId-bidder-timestamp being the id
    let bid = new BidLog(tokenId.toString() + '-' + bidder.id + '-' + timestamp.toString())
    bid.timestamp = timestamp
    bid.token = token.id
    bid.amountInEth = event.params.bidAmount
    bid.bidder = bidder.id
    bid.save()

    // Update Token attributes
    token.allBids.push(bid.id)
    token.currentBid = bid.id
    token.lastModifiedTimestamp = timestamp
    token.save()

  }

}

export function handleBidWithdrawn(event: BidWithdrawn): void {

  let tokenId = event.params.tokenId
  let timestamp = event.block.timestamp
  let token = loadOrCreateToken(tokenId)

  // Get the bid (must be the last element in the array aka the current bid)
  let bid = token.currentBid

  // Update bid log
  bid.withdrawnTimestamp = timestamp
  bid.isWithdrawn = true
  bid.save()

  // Update Token attributes
  token.allBids.pop()
  token.currentBid = bid.id[token.currentBid.length - 1]
  token.lastModifiedTimestamp = timestamp
  token.save()
    
}

export function handleBuyPriceSet(event: BuyPriceSet): void {

  let tokenId = event.params.tokenId
  let timestamp = event.block.timestamp
  let token = loadOrCreateToken(tokenId)
  
  // Update token buy-it-now price and last modified timestamp
  token.buyNowPriceInEth = event.params.price
  token.lastModifiedTimestamp = timestamp
  token.save()

}

export function handleControlLeverUpdated(event: ControlLeverUpdated): void {
  // TODO implement layer control mapping if needed
}

export function handlePlatformAddressUpdated(event: PlatformAddressUpdated): void {
  let platform = loadOrCreatePlatform(PLATFORM_ID)
  platform.address = event.params.platformAddress
  platform.lastModifiedTimestamp = event.block.timestamp
  platform.save()
}

export function handleRoyaltyAmountUpdated(event: RoyaltyAmountUpdated): void {
  let platform = loadOrCreatePlatform(PLATFORM_ID)
  platform.platformFirstSalePercentage = event.params.platformFirstPercentage
  platform.platformSecondSalePercentage = event.params.platformSecondPercentage
  platform.artistSecondarySalePercentage = event.params.artistSecondPercentage
  platform.lastModifiedTimestamp = event.block.timestamp
  platform.save()
}

export function handleTokenSale(event: TokenSale): void {

  let tokenId = event.params.tokenId
  let timestamp = event.block.timestamp
  let token = loadOrCreateToken(tokenId)

  // Get buyer account
  let buyer = loadOrCreateAccount(event.params.buyer)

  // Update SaleLog
  let sale = new SaleLog(tokenId.toString() + '-' + buyer.id + '-' + timestamp.toString())
  sale.timestamp = timestamp
  sale.token = token.id
  sale.amountInEth = event.params.salePrice
  sale.buyer = buyer.id
  sale.seller = token.owner
  sale.save()

  // Note: commented-out for now because we probably don't want
  //       to update ownership unless a Transfer event is heard
  // Update Token
  // token.owner = buyer.id
  // token.allOwners.push(buyer.id)
  // token.lastModifiedTimestamp = timestamp
  // token.save()

  // Update platform stats
  let platform = loadOrCreatePlatform(PLATFORM_ID)
  platform.totalSale += 1
  platform.totalSaleInEth += event.params.salePrice
  platform.save()

}

export function handleTransfer(event: Transfer): void {

  let tokenId = event.params.tokenId
  let from = loadOrCreateAccount(event.params.from)
  let to = loadOrCreateAccount(event.params.to)
  let token = loadOrCreateToken(tokenId)
  let timestamp = event.block.timestamp
  
  // Add a new entry in TransferLog
  let transfer = new TransferLog(tokenId.toString() + '-' + from.id + '-' + to.id)
  transfer.timestamp = timestamp
  transfer.from = from.id
  transfer.to = to.id
  transfer.save()

  // If the token comes from a genesis block, 
  // it's a newly minted token
  if (from.address == GENESIS_ADDRESS) {
    let contract = Contract.bind(event.address)
    let tokenURI = contract.tokenURI(tokenId)
    token.uri = tokenURI.toString()
    token.tokenId = tokenId
    token.creator = to
    // TODO how to get the info about isMaster and master?
    token.created = timestamp
    token.currentBid = 0
    token.allBids = []
    token.lastTransfer = transfer.id
    token.allTransfer = [transfer.id]
    token.save()    
  }   

  // Update Token ownership
  token.owner = to.id
  token.allOwners.push(to.id)
  token.lastModifiedTimestamp = timestamp
  token.save()

}