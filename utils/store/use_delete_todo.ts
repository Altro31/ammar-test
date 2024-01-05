import {create} from "zustand";

interface DeleteToDoState {
    deleteToDo: HTMLElement | null
    setDeleteToDo: (deleteToDo: HTMLElement | null) => void
}

const deleteToDo = create<DeleteToDoState>(set => ({
    deleteToDo: null,
    setDeleteToDo: deleteToDo => set({deleteToDo})
}))

export function useDeleteToDo() {
    return {
        deleteToDo: deleteToDo(state => state.deleteToDo),
        setDeleteToDo: deleteToDo(state => state.setDeleteToDo)
    }
}