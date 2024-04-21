import classnames from "classnames";
import {Checkbox} from "./Checkbox.tsx";
import {Trash} from "phosphor-react";
import {TaskProps} from "../App.tsx";

interface Props {
    task: TaskProps,
    handleDelete: (id: string) => void,
    handleToggle: (id: string) => void
}

export const Task = ({task, handleDelete, handleToggle}: Props) => {
    return (
        <div className="flex items-center gap-3 p-4 bg-gray-500 border border-gray-400 rounded-lg">
            <Checkbox isChecked={task.done} onClick={() => handleToggle(task.id)} />

            <p
                className={classnames("text-gray-100 flex-1", {
                    "line-through text-gray-300": task.done
                })}
            >
                {task.text}
            </p>

            <Trash className="text-gray-100" size={24} onClick={() => handleDelete(task.id)} />
        </div>
    )
}
