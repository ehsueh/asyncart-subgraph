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

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

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
  let token = Token.load(tokenId)

  if (token != null) {

    // Get the bidder or create if doesn't already exist
    let bidder = loadOrCreateAccount(event.params.bidder)

    // Create a new bid log entry with tokenId-bidder-timestamp being the id
    let bid = new BidLog(tokenId.toString() + '_' + bidder.id + '_' + timestamp.toString())
    bid.timestamp = timestamp
    bid.token = tokenId
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
  let token = Token.load(tokenId)
  
  if (token != null) {

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
}

export function handleBuyPriceSet(event: BuyPriceSet): void {

  let tokenId = event.params.tokenId
  let timestamp = event.block.timestamp
  let token = Token.load(tokenId)
  
  if (token != null) {

    // Update token buy-it-now price and last modified timestamp
    token.buyNowPriceInEth = event.params.price
    token.lastModifiedTimestamp = timestamp
    token.save()

  }

}

export function handleControlLeverUpdated(event: ControlLeverUpdated): void {}

export function handlePlatformAddressUpdated(
  event: PlatformAddressUpdated
): void {}

export function handleRoyaltyAmountUpdated(event: RoyaltyAmountUpdated): void {}

export function handleTokenSale(event: TokenSale): void {}

export function handleTransfer(event: Transfer): void {}
