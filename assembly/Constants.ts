import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "KRGG-v2";
  export const SYMBOL: string = "KRGG";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 100;
  export const URI: string = "https://lime-mid-mandrill-793.mypinata.cloud/ipfs/QmdStcNBskZcgsgYBoiJsvZuBsiUvnMSxecU7a4fRz56Fv/";
  export const OWNER: Uint8Array = Base58.decode("1LqAs29cya7jGcx5DFmDdpMdZBseEBzoU1");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1Q9T33cc4iUuscKdBBWKpqm83PYKqLK8Ex");
}