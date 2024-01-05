import {create} from "zustand";

interface CompleteToDoState {
    completeToDo: HTMLElement | null
    setCompleteToDo: (completeToDo: HTMLElement | null) => void
}

const completeToDo = create<CompleteToDoState>(set => ({
    completeToDo: null,
    setCompleteToDo: completeToDo => set({completeToDo})
}))

export function useCompleteToDo() {
    return {
        completeToDo: completeToDo(state => state.completeToDo),
        setCompleteToDo: completeToDo(state => state.setCompleteToDo)
    }
}