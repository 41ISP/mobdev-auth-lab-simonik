import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'

export const useUserstore = create()(
    persist((set) => ({
        session: undefined,
        clearSession: () => set({ session: undefined }),
        setSession: (session) => set({ session }),
    }),
        {
            name: "user-store",
            storage: createJSONStorage(() => localStorage),
        }
    ),
)