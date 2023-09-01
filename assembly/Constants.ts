import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Gamblers Genesis";
  export const SYMBOL: string = "KRGG";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 100;
  export const URI: string = "https://lime-mid-mandrill-793.mypinata.cloud/ipfs/QmdStcNBskZcgsgYBoiJsvZuBsiUvnMSxecU7a4fRz56Fv/";
  export const OWNER: Uint8Array = Base58.decode("1HCbbw7sbE6FNfzezs49AzFUSGezUEj3dC");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1HCbbw7sbE6FNfzezs49AzFUSGezUEj3dC");
}