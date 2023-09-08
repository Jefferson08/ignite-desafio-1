import {Input} from "./Input";
import {PlusCircle} from "phosphor-react";
import {Button} from "./Button";
import {FormEvent} from "react";

export const TaskForm = () => {
    function handleCreateTask(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <form className="flex items-center gap-2 -mt-[27px]" onSubmit={handleCreateTask}>
            <Input placeholder="Adicione uma nova tarefa" type="text"/>
            <Button text="Criar" icon={<PlusCircle className="text-white" size={16} />}/>
        </form>
    )
}
