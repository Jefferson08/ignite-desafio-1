import { ClipboardText } from 'phosphor-react'

export const Empty = () => (
  <div className="flex flex-col items-center justify-center h-[244px] rounded-lg border-t-gray-400 border-t">
    <ClipboardText className="text-gray-300" size={56} />
    <p className="text-gray-300 font-bold">
      Você ainda não tem tarefas criadas
    </p>
    <p className="text-gray-300">Crie tarefas e organize seus itens a fazer</p>
  </div>
)
