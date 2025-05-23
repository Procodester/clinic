type BadgedTextProps = {
    label: string;
};

export function Badge({ label }: BadgedTextProps) {
    return (
        <p className="text-xs tracking-wide text-secondary-500 font-medium bg-secondary-500/10 inline px-2 rounded-4xl">
            {label}
        </p>
    );
}


