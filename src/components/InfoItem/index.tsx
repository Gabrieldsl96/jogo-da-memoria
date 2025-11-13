type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({ label, value }: Props) => {
    return (
        <div className="m-5 flex flex-col items-center justify-center">
            <div className="text-2xl text-neutral-400">{label}</div>
            <div className="text-6xl font-bold text-black">{value}</div>
        </div>
    )
}