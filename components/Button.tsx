interface Props {
    children: JSX.Element | string
    className?: string | undefined
    onClick?: (...args: any) => void
}

export default function Button({ children, className, onClick }: Props) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}