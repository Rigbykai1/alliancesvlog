const PageButton = ({ onClick, disabled, children }) => (
    <button
        className="flex items-center px-4 border border-base-content opacity-70 bg-base-100 text-base-content rounded-lg
                hover:cursor-pointer hover:opacity-100
                disabled:opacity-50 disabled:bg-neutral disabled:border-transparent disabled:cursor-default sm:hidden"
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);

export default PageButton