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

export function loadOrCreatePlatform(platformId: String): Platform {

  let platform = Platform.load(platformId)
  
  if (platform == null) {
    platform = new Platform(platformId)
  }

  return platform as Platform
}

export function loadOrCreateAccount(address: Address): Account {

  let account = Account.load(address.toHex())
  
  // Create a new entry if it doesn't exist yet
  if (account == null) {
    account = new Account(address.toHex())
    account.address = address
  }

  return account as Account
}

export function loadOrCreateToken(tokenId: BigInt): Token {

  let token = Token.load(tokenId.toString())

  // Create Token 
  if (token == null) {
    token = new Token(tokenId.toString())
  }

  return token as Token

}

