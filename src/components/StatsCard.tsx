import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

/* Color variations available for the cards */
export type ColorVariant = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'gray';

/* Card sizes available */
export type SizeVariant = 'sm' | 'md' | 'lg';

/* Props for the StatsCard component */
export type StatsCardProp = {
    title: string;
    value: string | number;
    icon?: LucideIcon;
    change: string;
    changeType?: 'positive' | 'negative' | 'neutral';
    description?: string;
    variant?: ColorVariant;
    size?: SizeVariant;
    animated?: boolean;
    footer?: ReactNode;
    onClick: () => void;
    className: string;
};

/* Configuring colors for different variants */

const colorVariants: Record<ColorVariant, {
    bg: string;
    icon: string;
    text: string;
    hover: string;
}> = {
    blue: {
        bg: 'bg-blue-500/10',
        icon: 'text-blue-500',
        text: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:bg-blue-500/20',
    },
    green: {
        bg: 'bg-green-500/10',
        icon: 'text-green-500',
        text: 'text-green-600 dark:text-green-400',
        hover: 'hover:bg-green-500/20',
    },
    purple: {
        bg: 'bg-purple-500/10',
        icon: 'text-purple-500',
        text: 'text-purple-600 dark:text-purple-400',
        hover: 'hover:bg-purple-500/20',
    },
    orange: {
        bg: 'bg-orange-500/10',
        icon: 'text-orange-500',
        text: 'text-orange-600 dark:text-orange-400',
        hover: 'hover:bg-orange-500/20',
    },
    red: {
        bg: 'bg-red-500/10',
        icon: 'text-red-500',
        text: 'text-red-600 dark:text-red-400',
        hover: 'hover:bg-red-500/20',
    },
    gray: {
        bg: 'bg-gray-500/10',
        icon: 'text-gray-500',
        text: 'text-gray-600 dark:text-gray-400',
        hover: 'hover:bg-gray-500/20',
    },
};

const sizeVariants: Record<SizeVariant, {
    padding: string;
    iconSize: string;
    titleSize: string;
    valueSize: string;
}> = {
    sm: {
        padding: 'p-4',
        iconSize: 'w-8 h-8',
        titleSize: 'text-xs',
        valueSize: 'text-xl',
    },
    md: {
        padding: 'p-6',
        iconSize: 'w-10 h-10',
        titleSize: 'text-sm',
        valueSize: 'text-3xl',
    },
    lg: {
        padding: 'p-8',
        iconSize: 'w-12 h-12',
        titleSize: 'text-base',
        valueSize: 'text-4xl',
    },
};

const StatsCard = ({ title, value, icon: Icon, change, changeType = 'neutral', description, variant = 'blue', size = 'md', animated = true, footer, onClick, className = '' }: StatsCardProp) => {
    const colors = colorVariants[variant];
    const sizes = sizeVariants[size];

    const changeColorClass =
        changeType === 'positive'
            ? 'text-green-600 dark:text-green-400'
            : changeType === 'negative'
                ? 'text-red-600 dark:text-red-400'
                : 'text-gray-600 dark:text-gray-400';

    return (
        <div
            onClick={onClick}
            className={`
                bg-white dark:bg-slate-800 
                rounded-xl 
                border border-gray-200 dark:border-slate-700
                shadow-sm hover:shadow-md
                transition-all duration-300
                ${onClick ? 'cursor-pointer' : ''}
                ${colors.hover}
                ${animated ? 'animate-fade-in' : ''}
                ${className}
            `}
        >
            <div className={sizes.padding}>
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className={`${sizes.titleSize} font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide`}>
                            {title}
                        </p>
                    </div>
                    {Icon && (
                        <div className={`${colors.bg} ${colors.icon} ${sizes.iconSize} rounded-lg flex items-center justify-center p-2 transition-transform hover:scale-110`}>
                            <Icon className="w-full h-full" />
                        </div>
                    )}
                </div>

                {/* Main value */}
                <div className="mb-2">
                    <h3 className={`${sizes.valueSize} font-bold text-gray-900 dark:text-white`}>
                        {value}
                    </h3>
                </div>

                {/* Change indicator and description*/}
                <div className="flex items-center gap-2 flex-wrap">
                    {change && (
                        <span className={`text-sm font-semibold ${changeColorClass}`}>
                            {change}
                        </span>
                    )}
                    {description && (
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            {description}
                        </span>
                    )}
                </div>

                {/* Footer custom */}
                {footer && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}

export default StatsCard
