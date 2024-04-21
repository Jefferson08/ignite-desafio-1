import {Input} from "./Input";
import {PlusCircle} from "phosphor-react";
import {Button} from "./Button";
import {FormEvent, useState} from "react";

interface TaskFormProps {
    handleAddTask: (text: string) => void;
}

export const TaskForm = ({handleAddTask}:TaskFormProps) => {

    const [inputValue, setInputValue] = useState(""); // State to store input valu
    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if(inputValue.length > 3) {
            setInputValue("");
            handleAddTask(inputValue);
        } else {
            alert("Please enter at least 4 characters");
        }
    }

    return (
        <form className="flex items-center gap-2 -mt-[27px]" onSubmit={handleSubmit}>
            <Input value={inputValue} placeholder="Adicione uma nova tarefa" type="text" onChange={(e) => setInputValue(e.target.value)}/>
            <Button text="Criar" icon={<PlusCircle className="text-white" size={16} />}/>
        </form>
    )
}
