import { BigInt, Address, log} from "@graphprotocol/graph-ts"
import {
  Contract,
  Transfer
} from "../generated/Contract/Contract" 
import {
  Platform,
  Token,
  Account
} from "../generated/schema"

export function loadOrCreatePlatform(platformId: String) {

  let platform = Platform.load(platformId)
  
  if (platform == null) {
    platform = new Platform(platformId)
    platform.save()
  }

  return platform as Platform
}

export function loadOrCreateAccount(address: Address) {

  let account = Account.load(address.toHex())
  
  // Create a new entry if it doesn't exist yet
  if (account == null) {
    account = new Account(address.toHex())
    account.address = address
    account.save()
  }

  return account as Account
}

export function loadOrCreateToken(tokenId: BigInt) {

  let token = Token.load(tokenId.toString())

  // Create Token 
  if (token == null) {
    token = new Token(tokenId.toString())
    token.save()
  }

  return token as Token

}

