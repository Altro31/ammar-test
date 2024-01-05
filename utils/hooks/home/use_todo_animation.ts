import {useDeleteToDo} from "@/utils/store/use_delete_todo";
import {PanInfo} from "framer-motion";
import {useCompleteToDo} from "@/utils/store/use_complete_todo";
import React from "react";

export function useToDoAnimation(ref: React.MutableRefObject<any>) {

    const {completeToDo} = useCompleteToDo()
    const {deleteToDo, setDeleteToDo} = useDeleteToDo()

    const isDeleting = ref.current && ref.current == deleteToDo
    const isCompleting = ref.current && ref.current == completeToDo

    const dragEndHandler = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {

        if (info.offset.x < -40) {
            setDeleteToDo(ref.current)
            return
        }

        setDeleteToDo(null)
    }


    return {
        isDeleting,
        isCompleting,
        dragEndHandler
    }
}