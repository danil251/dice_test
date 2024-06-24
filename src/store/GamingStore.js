import {create} from "zustand";

export const useGamingStore = create((set) => ({
    balance: 100,
    activeMode: null,
    betAmount: '1',
    specificNumber: null,
    currentRollResult: null,
    endMessage: null,
    setActiveMod: (payload) => set({activeMode: payload}),
    setBetAmount: (payload) => set({betAmount: payload}),
    setSpecificNumber: (payload) => set({specificNumber: payload}),
    setCurrentRollResult: (payload) => set({currentRollResult: payload}),
    setBalance: (payload) => set({balance: payload}),
    setEndMessage: (payload) => set({endMessage: payload}),
}))