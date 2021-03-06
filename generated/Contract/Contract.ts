// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BidProposed extends ethereum.Event {
  get params(): BidProposed__Params {
    return new BidProposed__Params(this);
  }
}

export class BidProposed__Params {
  _event: BidProposed;

  constructor(event: BidProposed) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bidAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class BidWithdrawn extends ethereum.Event {
  get params(): BidWithdrawn__Params {
    return new BidWithdrawn__Params(this);
  }
}

export class BidWithdrawn__Params {
  _event: BidWithdrawn;

  constructor(event: BidWithdrawn) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class BuyPriceSet extends ethereum.Event {
  get params(): BuyPriceSet__Params {
    return new BuyPriceSet__Params(this);
  }
}

export class BuyPriceSet__Params {
  _event: BuyPriceSet;

  constructor(event: BuyPriceSet) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ControlLeverUpdated extends ethereum.Event {
  get params(): ControlLeverUpdated__Params {
    return new ControlLeverUpdated__Params(this);
  }
}

export class ControlLeverUpdated__Params {
  _event: ControlLeverUpdated;

  constructor(event: ControlLeverUpdated) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get priorityTip(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get leverIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get previousValues(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get updatedValues(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class PlatformAddressUpdated extends ethereum.Event {
  get params(): PlatformAddressUpdated__Params {
    return new PlatformAddressUpdated__Params(this);
  }
}

export class PlatformAddressUpdated__Params {
  _event: PlatformAddressUpdated;

  constructor(event: PlatformAddressUpdated) {
    this._event = event;
  }

  get platformAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RoyaltyAmountUpdated extends ethereum.Event {
  get params(): RoyaltyAmountUpdated__Params {
    return new RoyaltyAmountUpdated__Params(this);
  }
}

export class RoyaltyAmountUpdated__Params {
  _event: RoyaltyAmountUpdated;

  constructor(event: RoyaltyAmountUpdated) {
    this._event = event;
  }

  get platformFirstPercentage(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get platformSecondPercentage(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get artistSecondPercentage(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokenSale extends ethereum.Event {
  get params(): TokenSale__Params {
    return new TokenSale__Params(this);
  }
}

export class TokenSale__Params {
  _event: TokenSale;

  constructor(event: TokenSale) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get salePrice(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract__pendingBidsResult {
  value0: Address;
  value1: BigInt;
  value2: boolean;

  constructor(value0: Address, value1: BigInt, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  artistSecondSalePercentage(): BigInt {
    let result = super.call(
      "artistSecondSalePercentage",
      "artistSecondSalePercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_artistSecondSalePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "artistSecondSalePercentage",
      "artistSecondSalePercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  buyPrices(param0: BigInt): BigInt {
    let result = super.call("buyPrices", "buyPrices(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_buyPrices(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("buyPrices", "buyPrices(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  expectedTokenSupply(): BigInt {
    let result = super.call(
      "expectedTokenSupply",
      "expectedTokenSupply():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_expectedTokenSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "expectedTokenSupply",
      "expectedTokenSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getControlToken(controlTokenId: BigInt): Array<BigInt> {
    let result = super.call(
      "getControlToken",
      "getControlToken(uint256):(int256[])",
      [ethereum.Value.fromUnsignedBigInt(controlTokenId)]
    );

    return result[0].toBigIntArray();
  }

  try_getControlToken(
    controlTokenId: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getControlToken",
      "getControlToken(uint256):(int256[])",
      [ethereum.Value.fromUnsignedBigInt(controlTokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingBids(param0: BigInt): Contract__pendingBidsResult {
    let result = super.call(
      "pendingBids",
      "pendingBids(uint256):(address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__pendingBidsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBoolean()
    );
  }

  try_pendingBids(
    param0: BigInt
  ): ethereum.CallResult<Contract__pendingBidsResult> {
    let result = super.tryCall(
      "pendingBids",
      "pendingBids(uint256):(address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__pendingBidsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBoolean()
      )
    );
  }

  permissionedControllers(param0: Address): Address {
    let result = super.call(
      "permissionedControllers",
      "permissionedControllers(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_permissionedControllers(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "permissionedControllers",
      "permissionedControllers(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  platformAddress(): Address {
    let result = super.call(
      "platformAddress",
      "platformAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_platformAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "platformAddress",
      "platformAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  platformFirstSalePercentage(): BigInt {
    let result = super.call(
      "platformFirstSalePercentage",
      "platformFirstSalePercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_platformFirstSalePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "platformFirstSalePercentage",
      "platformFirstSalePercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  platformSecondSalePercentage(): BigInt {
    let result = super.call(
      "platformSecondSalePercentage",
      "platformSecondSalePercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_platformSecondSalePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "platformSecondSalePercentage",
      "platformSecondSalePercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenDidHaveFirstSale(param0: BigInt): boolean {
    let result = super.call(
      "tokenDidHaveFirstSale",
      "tokenDidHaveFirstSale(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBoolean();
  }

  try_tokenDidHaveFirstSale(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "tokenDidHaveFirstSale",
      "tokenDidHaveFirstSale(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uniqueTokenCreators(param0: BigInt, param1: BigInt): Address {
    let result = super.call(
      "uniqueTokenCreators",
      "uniqueTokenCreators(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_uniqueTokenCreators(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniqueTokenCreators",
      "uniqueTokenCreators(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  whitelistedCreators(param0: Address): boolean {
    let result = super.call(
      "whitelistedCreators",
      "whitelistedCreators(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_whitelistedCreators(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "whitelistedCreators",
      "whitelistedCreators(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptBidCall extends ethereum.Call {
  get inputs(): AcceptBidCall__Inputs {
    return new AcceptBidCall__Inputs(this);
  }

  get outputs(): AcceptBidCall__Outputs {
    return new AcceptBidCall__Outputs(this);
  }
}

export class AcceptBidCall__Inputs {
  _call: AcceptBidCall;

  constructor(call: AcceptBidCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AcceptBidCall__Outputs {
  _call: AcceptBidCall;

  constructor(call: AcceptBidCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class GrantControlPermissionCall extends ethereum.Call {
  get inputs(): GrantControlPermissionCall__Inputs {
    return new GrantControlPermissionCall__Inputs(this);
  }

  get outputs(): GrantControlPermissionCall__Outputs {
    return new GrantControlPermissionCall__Outputs(this);
  }
}

export class GrantControlPermissionCall__Inputs {
  _call: GrantControlPermissionCall;

  constructor(call: GrantControlPermissionCall) {
    this._call = call;
  }

  get permissioned(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GrantControlPermissionCall__Outputs {
  _call: GrantControlPermissionCall;

  constructor(call: GrantControlPermissionCall) {
    this._call = call;
  }
}

export class MakeBuyPriceCall extends ethereum.Call {
  get inputs(): MakeBuyPriceCall__Inputs {
    return new MakeBuyPriceCall__Inputs(this);
  }

  get outputs(): MakeBuyPriceCall__Outputs {
    return new MakeBuyPriceCall__Outputs(this);
  }
}

export class MakeBuyPriceCall__Inputs {
  _call: MakeBuyPriceCall;

  constructor(call: MakeBuyPriceCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MakeBuyPriceCall__Outputs {
  _call: MakeBuyPriceCall;

  constructor(call: MakeBuyPriceCall) {
    this._call = call;
  }
}

export class MintArtworkCall extends ethereum.Call {
  get inputs(): MintArtworkCall__Inputs {
    return new MintArtworkCall__Inputs(this);
  }

  get outputs(): MintArtworkCall__Outputs {
    return new MintArtworkCall__Outputs(this);
  }
}

export class MintArtworkCall__Inputs {
  _call: MintArtworkCall;

  constructor(call: MintArtworkCall) {
    this._call = call;
  }

  get artworkTokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get artworkTokenURI(): string {
    return this._call.inputValues[1].value.toString();
  }

  get controlTokenArtists(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }
}

export class MintArtworkCall__Outputs {
  _call: MintArtworkCall;

  constructor(call: MintArtworkCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetupControlTokenCall extends ethereum.Call {
  get inputs(): SetupControlTokenCall__Inputs {
    return new SetupControlTokenCall__Inputs(this);
  }

  get outputs(): SetupControlTokenCall__Outputs {
    return new SetupControlTokenCall__Outputs(this);
  }
}

export class SetupControlTokenCall__Inputs {
  _call: SetupControlTokenCall;

  constructor(call: SetupControlTokenCall) {
    this._call = call;
  }

  get controlTokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get controlTokenURI(): string {
    return this._call.inputValues[1].value.toString();
  }

  get leverMinValues(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get leverMaxValues(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get leverStartValues(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get additionalCollaborators(): Array<Address> {
    return this._call.inputValues[5].value.toAddressArray();
  }
}

export class SetupControlTokenCall__Outputs {
  _call: SetupControlTokenCall;

  constructor(call: SetupControlTokenCall) {
    this._call = call;
  }
}

export class TakeBuyPriceCall extends ethereum.Call {
  get inputs(): TakeBuyPriceCall__Inputs {
    return new TakeBuyPriceCall__Inputs(this);
  }

  get outputs(): TakeBuyPriceCall__Outputs {
    return new TakeBuyPriceCall__Outputs(this);
  }
}

export class TakeBuyPriceCall__Inputs {
  _call: TakeBuyPriceCall;

  constructor(call: TakeBuyPriceCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TakeBuyPriceCall__Outputs {
  _call: TakeBuyPriceCall;

  constructor(call: TakeBuyPriceCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpdatePlatformAddressCall extends ethereum.Call {
  get inputs(): UpdatePlatformAddressCall__Inputs {
    return new UpdatePlatformAddressCall__Inputs(this);
  }

  get outputs(): UpdatePlatformAddressCall__Outputs {
    return new UpdatePlatformAddressCall__Outputs(this);
  }
}

export class UpdatePlatformAddressCall__Inputs {
  _call: UpdatePlatformAddressCall;

  constructor(call: UpdatePlatformAddressCall) {
    this._call = call;
  }

  get newPlatformAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdatePlatformAddressCall__Outputs {
  _call: UpdatePlatformAddressCall;

  constructor(call: UpdatePlatformAddressCall) {
    this._call = call;
  }
}

export class UpdateRoyaltyPercentagesCall extends ethereum.Call {
  get inputs(): UpdateRoyaltyPercentagesCall__Inputs {
    return new UpdateRoyaltyPercentagesCall__Inputs(this);
  }

  get outputs(): UpdateRoyaltyPercentagesCall__Outputs {
    return new UpdateRoyaltyPercentagesCall__Outputs(this);
  }
}

export class UpdateRoyaltyPercentagesCall__Inputs {
  _call: UpdateRoyaltyPercentagesCall;

  constructor(call: UpdateRoyaltyPercentagesCall) {
    this._call = call;
  }

  get _platformFirstSalePercentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _platformSecondSalePercentage(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _artistSecondSalePercentage(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateRoyaltyPercentagesCall__Outputs {
  _call: UpdateRoyaltyPercentagesCall;

  constructor(call: UpdateRoyaltyPercentagesCall) {
    this._call = call;
  }
}

export class UpdateWhitelistCall extends ethereum.Call {
  get inputs(): UpdateWhitelistCall__Inputs {
    return new UpdateWhitelistCall__Inputs(this);
  }

  get outputs(): UpdateWhitelistCall__Outputs {
    return new UpdateWhitelistCall__Outputs(this);
  }
}

export class UpdateWhitelistCall__Inputs {
  _call: UpdateWhitelistCall;

  constructor(call: UpdateWhitelistCall) {
    this._call = call;
  }

  get creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get state(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class UpdateWhitelistCall__Outputs {
  _call: UpdateWhitelistCall;

  constructor(call: UpdateWhitelistCall) {
    this._call = call;
  }
}

export class UseControlTokenCall extends ethereum.Call {
  get inputs(): UseControlTokenCall__Inputs {
    return new UseControlTokenCall__Inputs(this);
  }

  get outputs(): UseControlTokenCall__Outputs {
    return new UseControlTokenCall__Outputs(this);
  }
}

export class UseControlTokenCall__Inputs {
  _call: UseControlTokenCall;

  constructor(call: UseControlTokenCall) {
    this._call = call;
  }

  get controlTokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get leverIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get newValues(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class UseControlTokenCall__Outputs {
  _call: UseControlTokenCall;

  constructor(call: UseControlTokenCall) {
    this._call = call;
  }
}

export class WithdrawBidCall extends ethereum.Call {
  get inputs(): WithdrawBidCall__Inputs {
    return new WithdrawBidCall__Inputs(this);
  }

  get outputs(): WithdrawBidCall__Outputs {
    return new WithdrawBidCall__Outputs(this);
  }
}

export class WithdrawBidCall__Inputs {
  _call: WithdrawBidCall;

  constructor(call: WithdrawBidCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawBidCall__Outputs {
  _call: WithdrawBidCall;

  constructor(call: WithdrawBidCall) {
    this._call = call;
  }
}
