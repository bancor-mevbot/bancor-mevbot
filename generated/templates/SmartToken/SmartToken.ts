// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class NewSmartToken extends EthereumEvent {
  get params(): NewSmartToken__Params {
    return new NewSmartToken__Params(this);
  }
}

export class NewSmartToken__Params {
  _event: NewSmartToken;

  constructor(event: NewSmartToken) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Issuance extends EthereumEvent {
  get params(): Issuance__Params {
    return new Issuance__Params(this);
  }
}

export class Issuance__Params {
  _event: Issuance;

  constructor(event: Issuance) {
    this._event = event;
  }

  get _amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Destruction extends EthereumEvent {
  get params(): Destruction__Params {
    return new Destruction__Params(this);
  }
}

export class Destruction__Params {
  _event: Destruction;

  constructor(event: Destruction) {
    this._event = event;
  }

  get _amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends EthereumEvent {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnerUpdate extends EthereumEvent {
  get params(): OwnerUpdate__Params {
    return new OwnerUpdate__Params(this);
  }
}

export class OwnerUpdate__Params {
  _event: OwnerUpdate;

  constructor(event: OwnerUpdate) {
    this._event = event;
  }

  get _prevOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SmartToken extends SmartContract {
  static bind(address: Address): SmartToken {
    return new SmartToken("SmartToken", address);
  }

  name(): string {
    let result = super.call("name", []);

    return result[0].toString();
  }

  try_name(): CallResult<string> {
    let result = super.tryCall("name", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  approve(_spender: Address, _value: BigInt): boolean {
    let result = super.call("approve", [
      EthereumValue.fromAddress(_spender),
      EthereumValue.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(_spender: Address, _value: BigInt): CallResult<boolean> {
    let result = super.tryCall("approve", [
      EthereumValue.fromAddress(_spender),
      EthereumValue.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): CallResult<BigInt> {
    let result = super.tryCall("totalSupply", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(_from: Address, _to: Address, _value: BigInt): boolean {
    let result = super.call("transferFrom", [
      EthereumValue.fromAddress(_from),
      EthereumValue.fromAddress(_to),
      EthereumValue.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_transferFrom(
    _from: Address,
    _to: Address,
    _value: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("transferFrom", [
      EthereumValue.fromAddress(_from),
      EthereumValue.fromAddress(_to),
      EthereumValue.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): i32 {
    let result = super.call("decimals", []);

    return result[0].toI32();
  }

  try_decimals(): CallResult<i32> {
    let result = super.tryCall("decimals", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }

  version(): string {
    let result = super.call("version", []);

    return result[0].toString();
  }

  try_version(): CallResult<string> {
    let result = super.tryCall("version", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  standard(): string {
    let result = super.call("standard", []);

    return result[0].toString();
  }

  try_standard(): CallResult<string> {
    let result = super.tryCall("standard", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  balanceOf(param0: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_balanceOf(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("balanceOf", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", []);

    return result[0].toString();
  }

  try_symbol(): CallResult<string> {
    let result = super.tryCall("symbol", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  transfer(_to: Address, _value: BigInt): boolean {
    let result = super.call("transfer", [
      EthereumValue.fromAddress(_to),
      EthereumValue.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(_to: Address, _value: BigInt): CallResult<boolean> {
    let result = super.tryCall("transfer", [
      EthereumValue.fromAddress(_to),
      EthereumValue.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  transfersEnabled(): boolean {
    let result = super.call("transfersEnabled", []);

    return result[0].toBoolean();
  }

  try_transfersEnabled(): CallResult<boolean> {
    let result = super.tryCall("transfersEnabled", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  newOwner(): Address {
    let result = super.call("newOwner", []);

    return result[0].toAddress();
  }

  try_newOwner(): CallResult<Address> {
    let result = super.tryCall("newOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  allowance(param0: Address, param1: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return result[0].toBigInt();
  }

  try_allowance(param0: Address, param1: Address): CallResult<BigInt> {
    let result = super.tryCall("allowance", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCall extends EthereumCall {
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

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DisableTransfersCall extends EthereumCall {
  get inputs(): DisableTransfersCall__Inputs {
    return new DisableTransfersCall__Inputs(this);
  }

  get outputs(): DisableTransfersCall__Outputs {
    return new DisableTransfersCall__Outputs(this);
  }
}

export class DisableTransfersCall__Inputs {
  _call: DisableTransfersCall;

  constructor(call: DisableTransfersCall) {
    this._call = call;
  }

  get _disable(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class DisableTransfersCall__Outputs {
  _call: DisableTransfersCall;

  constructor(call: DisableTransfersCall) {
    this._call = call;
  }
}

export class TransferFromCall extends EthereumCall {
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

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawTokensCall extends EthereumCall {
  get inputs(): WithdrawTokensCall__Inputs {
    return new WithdrawTokensCall__Inputs(this);
  }

  get outputs(): WithdrawTokensCall__Outputs {
    return new WithdrawTokensCall__Outputs(this);
  }
}

export class WithdrawTokensCall__Inputs {
  _call: WithdrawTokensCall;

  constructor(call: WithdrawTokensCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawTokensCall__Outputs {
  _call: WithdrawTokensCall;

  constructor(call: WithdrawTokensCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends EthereumCall {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class IssueCall extends EthereumCall {
  get inputs(): IssueCall__Inputs {
    return new IssueCall__Inputs(this);
  }

  get outputs(): IssueCall__Outputs {
    return new IssueCall__Outputs(this);
  }
}

export class IssueCall__Inputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IssueCall__Outputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }
}

export class DestroyCall extends EthereumCall {
  get inputs(): DestroyCall__Inputs {
    return new DestroyCall__Inputs(this);
  }

  get outputs(): DestroyCall__Outputs {
    return new DestroyCall__Outputs(this);
  }
}

export class DestroyCall__Inputs {
  _call: DestroyCall;

  constructor(call: DestroyCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DestroyCall__Outputs {
  _call: DestroyCall;

  constructor(call: DestroyCall) {
    this._call = call;
  }
}

export class TransferCall extends EthereumCall {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
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

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _decimals(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}