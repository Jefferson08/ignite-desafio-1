import { Check } from 'phosphor-react'
import classnames from 'classnames'

export const Checkbox = ({ isChecked = false, ...rest }) => (
  <div
    {...rest}
    className={classnames(
      'w-5 h-5 flex items-center justify-center border-2 bg-transparent cursor-pointer border-blue rounded-full focus:ring-opacity-0 hover:bg-blue-dark hover:bg-opacity-20',
      {
        'bg-purple-dark border-purple-dark hover:bg-opacity-100': isChecked,
      },
    )}
  >
    {isChecked && <Check size={16} className="text-gray-100" />}
  </div>
)
