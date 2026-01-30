import type { LucideIcon } from "lucide-react"
import type { ReactNode } from 'react';

/* Color variations available for the ProgressCard */
export type ColorVariant = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'gray';

/* Available progress bar types */
export type ProgressType = 'linear' | 'circular' | 'stepped';

/* Aviable size */
export type SizeVariant = 'sm' | 'md' | 'lg';

/* Props for the ProgressCard component */
export interface ProgressCardProps {
    /* title of card */
    title: string;

    /* current value (0 - 100) */
    value: number;

    /* Icon to display (Lucide React component) */
    icon?: LucideIcon;

    /* Label to display on progress */
    label?: string;

    /* Additional description */
    description?: string;

    /* Type of progressbar */
    type?: ProgressType;

    /* Color variant */
    variant?: ColorVariant;

    /* Dimension of card */
    size?: SizeVariant;

    /* Whether to show the percentage*/
    showPercentage?: boolean;

    /* Whether to show the animation */
    animated?: boolean;

    /* Total steps (only for type="stepped") */
    totalSteps?: number;

    /* Current step (only for type="stepped") */
    currentStep?: number;

    /* Custom content in the footer */
    footer?: ReactNode;

    /* Callback on card click */
    onClick?: () => void;

    /* Additional CSS class */
    className?: string;
};

/* Color configuration for different variants */
const colorVariants: Record<ColorVariant, {
    bg: string;
    progress: string;
    icon: string;
    text: string;
    hover: string;
}> = {
    blue: {
        bg: 'bg-blue-500/10',
        progress: 'bg-blue-500',
        icon: 'text-blue-500',
        text: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:bg-blue-500/20',
    },
    green: {
        bg: 'bg-green-500/10',
        progress: 'bg-green-500',
        icon: 'text-green-500',
        text: 'text-green-600 dark:text-green-400',
        hover: 'hover:bg-green-500/20',
    },
    purple: {
        bg: 'bg-purple-500/10',
        progress: 'bg-purple-500',
        icon: 'text-purple-500',
        text: 'text-purple-600 dark:text-purple-400',
        hover: 'hover:bg-purple-500/20',
    },
    orange: {
        bg: 'bg-orange-500/10',
        progress: 'bg-orange-500',
        icon: 'text-orange-500',
        text: 'text-orange-600 dark:text-orange-400',
        hover: 'hover:bg-orange-500/20',
    },
    red: {
        bg: 'bg-red-500/10',
        progress: 'bg-red-500',
        icon: 'text-red-500',
        text: 'text-red-600 dark:text-red-400',
        hover: 'hover:bg-red-500/20',
    },
    gray: {
        bg: 'bg-gray-500/10',
        progress: 'bg-gray-500',
        icon: 'text-gray-500',
        text: 'text-gray-600 dark:text-gray-400',
        hover: 'hover:bg-gray-500/20',
    },
};

/* Size configuration */
const sizeVariants: Record<SizeVariant, {
    padding: string;
    iconSize: string;
    titleSize: string;
    valueSize: string;
    barHeight: string;
    circleSize: number;
}> = {
    sm: {
        padding: 'p-4',
        iconSize: 'w-8 h-8',
        titleSize: 'text-xs',
        valueSize: 'text-xl',
        barHeight: 'h-2',
        circleSize: 60,
    },
    md: {
        padding: 'p-6',
        iconSize: 'w-10 h-10',
        titleSize: 'text-sm',
        valueSize: 'text-3xl',
        barHeight: 'h-3',
        circleSize: 80,
    },
    lg: {
        padding: 'p-8',
        iconSize: 'w-12 h-12',
        titleSize: 'text-base',
        valueSize: 'text-4xl',
        barHeight: 'h-4',
        circleSize: 100,
    },
};/*  */

const ProgressCard = ({
    title,
    value,
    icon: Icon,
    label,
    description,
    type = 'linear',
    variant = 'blue',
    size = 'md',
    showPercentage = true,
    animated = true,
    totalSteps = 5,
    currentStep = 0,
    footer,
    onClick,
    className = '',
}: ProgressCardProps) => {
    const colors = colorVariants[variant];
    const sizes = sizeVariants[size];

    // Assicura che il valore sia tra 0 e 100
    const clampedValue = Math.min(Math.max(value, 0), 100);

    // Calcola la circonferenza per il progress circolare
    const radius = (sizes.circleSize - 10) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (clampedValue / 100) * circumference;

    // Render progress bar lineare
    const renderLinearProgress = () => (
        <div className="w-full">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label || title}
                </span>
                {showPercentage && (
                    <span className={`text-sm font-bold ${colors.text}`}>
                        {Math.round(clampedValue)}%
                    </span>
                )}
            </div>
            <div className={`w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden ${sizes.barHeight}`}>
                <div
                    className={`${colors.progress} ${sizes.barHeight} rounded-full ${animated ? 'transition-all duration-500 ease-out' : ''}`}
                    style={{ width: `${clampedValue}%` }}
                />
            </div>
        </div>
    );

    // Render progress circolare
    const renderCircularProgress = () => (
        <div className="flex flex-col items-center justify-center">
            <div className="relative" style={{ width: sizes.circleSize, height: sizes.circleSize }}>
                {/* Background circle */}
                <svg
                    className="transform -rotate-90"
                    width={sizes.circleSize}
                    height={sizes.circleSize}
                >
                    <circle
                        cx={sizes.circleSize / 2}
                        cy={sizes.circleSize / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200 dark:text-slate-700"
                    />
                    {/* Progress circle */}
                    <circle
                        cx={sizes.circleSize / 2}
                        cy={sizes.circleSize / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className={`${colors.icon} ${animated ? 'transition-all duration-500 ease-out' : ''}`}
                    />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {showPercentage && (
                        <>
                            <span className={`font-bold ${colors.text}`}
                                style={{
                                    fontSize: size === 'sm' ? '15px' : size === 'md' ? '20px' : '36px'
                                }}
                            >
                                {Math.round(clampedValue)}%
                            </span>
                            {label && (
                                <span className={`${size === 'sm' ? 'text-[9px]' : size === 'md' ? 'text-[10px]' : 'text-sm'} text-gray-600 dark:text-gray-400 mt-1`}>
                                    {label}
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );

    // Render stepped progress
    const renderSteppedProgress = () => {
        const steps = Array.from({ length: totalSteps }, (_, i) => i);
        const activeStep = Math.floor((clampedValue / 100) * totalSteps);

        return (
            <div className="w-full">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {label || title}
                    </span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {currentStep || activeStep} / {totalSteps}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    {steps.map((step) => {
                        const isActive = step < (currentStep !== undefined ? currentStep : activeStep);
                        const isCurrent = step === (currentStep !== undefined ? currentStep : activeStep);

                        return (
                            <div
                                key={step}
                                className={`
                  flex-1 h-2 rounded-full
                  ${animated ? 'transition-all duration-300' : ''}
                  ${isActive ? colors.progress : ''}
                  ${isCurrent ? `${colors.progress} opacity-70` : ''}
                  ${!isActive && !isCurrent ? 'bg-gray-200 dark:bg-slate-700' : ''}
                `}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div
            onClick={onClick}
            className={`
        bg-white dark:bg-slate-800 
        rounded-xl 
        border border-gray-200 dark:border-slate-700
        shadow-sm hover:shadow-md
        transition-all duration-300
        ${onClick !== undefined ? 'cursor-pointer' : ''}
        ${colors.hover}
        ${animated ? 'animate-fade-in' : ''}
        ${className}
      `}
        >
            <div className={sizes.padding}>
                {/* Header con icona */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className={`${sizes.titleSize} font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide`}>
                            {title}
                        </p>
                        {description && type !== 'circular' && (
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                {description}
                            </p>
                        )}
                    </div>
                    {Icon && (
                        <div className={`${colors.bg} ${colors.icon} ${sizes.iconSize} rounded-lg flex items-center justify-center p-2 transition-transform hover:scale-110`}>
                            <Icon className="w-full h-full" />
                        </div>
                    )}
                </div>

                {/* Progress visualization */}
                <div className="mb-2">
                    {type === 'linear' && renderLinearProgress()}
                    {type === 'circular' && renderCircularProgress()}
                    {type === 'stepped' && renderSteppedProgress()}
                </div>

                {/* Description for circular type */}
                {description && type === 'circular' && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-2">
                        {description}
                    </p>
                )}

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

export default ProgressCard
