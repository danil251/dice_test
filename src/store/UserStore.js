import {create} from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    modalLoginIsOpen: false,
    fetchUser: async () => {
        const result = await fetch('https://api.lettobet.dev.bet4skill.com/api/auth/me', {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (result.status === 200) {
            set({user: result})
        }

    },
    setModalLoginIsOpen: (payload) => set({modalLoginIsOpen: payload}),
}))