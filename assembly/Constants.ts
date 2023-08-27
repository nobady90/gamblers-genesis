import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Gamblers Genesis";
  export const SYMBOL: string = "KRGG";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 100;
  export const URI: string = "https://lime-mid-mandrill-793.mypinata.cloud/ipfs/QmeUReU5VxKuzcbi4QeW1yki79NammJGmFRjox33giy6zq/";
  export const OWNER: Uint8Array = Base58.decode("13BSoBfNAYuUM7VKkJSpHqPzfFuU8FbA3L");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("13BSoBfNAYuUM7VKkJSpHqPzfFuU8FbA3L");
}