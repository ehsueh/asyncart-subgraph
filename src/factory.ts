import { BigInt, Address, log} from "@graphprotocol/graph-ts"
import {
  Contract,
  Transfer
} from "../generated/Contract/Contract" 
import {
  Token,
  Account
} from "../generated/schema"

const GENESIS_ADDRESS = '0x0000000000000000000000000000000000000000'

export function loadOrCreateAccount(address: Address) {

  let account = Account.load(address.toHex())
  
  // Create a new entry if it doesn't exist yet
  if (account == null) {
    account = new Account(address.toHex())
    account.addres = address
    account.save()
  }

  return account as Account
}

export function loadOrCreateToken(event: Transfer, tokenId: BigInt) {

  let to = loadOrCreateAccount(event.params.to)
  let from = loadOrCreateAccount(event.params.from)

  // If the token comes from a genesis block, add a new record
  if (from.address == GENESIS_ADDRESS) {
    let contract = Contract.bind(event.address)
    let tokenURI = contract.tokenURI(tokenId)
    let token = new Token(tokenId.toString())
    token.uri = tokenURI.toString()
    token.creator = 
  } else {

    let token = Token.load(tokenId.toString())
    if (token == null) {
      log.warning('Token #{} does not exist', [tokenId])
    }

  }


}

