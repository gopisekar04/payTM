import { atom } from "recoil";

export const balanceAtom = atom<number>({
    key: "balance",
    default: 10000000000
})