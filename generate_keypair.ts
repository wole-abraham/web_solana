import { Keypair } from "@solana/web3.js";
import * as dotenv from 'dotenv';

dotenv.config();

const keypair = Keypair.generate();

// console.log(`The Public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);

console.log(process.env.PUBLIC_KEY)
console.log(process.env.SECRET_KEY)