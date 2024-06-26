import { createStore } from "zustand/vanilla"

export type AppState = {
  drawer: string
  chatsQuery: string
}

export type AppActions = {
  setDrawer: (arg_0: string) => void
  setChatsQuery: (arg_0: string) => void
}

export type AppStore = AppState & AppActions

export const defaultInitState: AppState = {
  drawer: "",
  chatsQuery: "",
}
export const initAppStore = (): AppState => {
  return { ...defaultInitState }
}

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set, get) => ({
    ...initState,
    setDrawer(newDrawerState) {
      set((state) => ({ drawer: newDrawerState }))
    },
    setChatsQuery(arg_0) {
      set((state) => ({ chatsQuery: arg_0 }))
    },
  }))
}
