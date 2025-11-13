type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ label, icon, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className="flex justify-center items-center w-40 gap-5 p-3 rounded-md cursor-pointer text-white bg-blue-500 hover:bg-blue-400 transition-colors duration-200"
        >
            {icon &&
                <div>
                    <img src={icon} />
                </div>
            }
            <div>{label}</div>
        </div>
    )
}