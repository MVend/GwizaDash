import React from 'react'
import { MdOutlineSupervisorAccount } from 'react-icons/md'

const NumbersCard = ({ title, iconColor, iconBg, icon, percentage, pcColor, value }) => {
    return (
        <div key={title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ml-3">
            <button
                type="button"
                style={{
                    color: iconColor || '#03C9D7',
                    backgroundColor: iconBg || '#E5FAFB'
                }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
                {icon || <MdOutlineSupervisorAccount />}
            </button>
            <p className="mt-3">
                <span className="text-lg font-semibold">{new Intl.NumberFormat('en-IN').format(value)}</span>
                {percentage && <span className={`text-sm text-${pcColor || 'green-600'} ml-2`}>
                    {percentage}
                </span>}
            </p>
            <p className="text-sm text-gray-400  mt-1">{title}</p>
        </div>
    )
}
export default NumbersCard;
