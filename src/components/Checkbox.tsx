import { Check } from 'phosphor-react';

export const MyCheckbox = ({isChecked = false}) => (
    <div
        className={`w-5 h-5 flex items-center justify-center border-2 bg-transparent border-blue rounded-full focus:ring-opacity-0 hover:bg-blue-dark hover:bg-opacity-20 ${isChecked ? 'bg-purple-dark border-purple-dark hover:bg-opacity-100' : ''}`}>
        {isChecked && <Check size={16} className="text-gray-100"/>}
    </div>
)
