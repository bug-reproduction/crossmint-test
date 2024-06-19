import { bytesToHex, randomBytes } from "@noble/hashes/utils";

export function randomSalt() {
    return `0x${bytesToHex(randomBytes(32))}`
}