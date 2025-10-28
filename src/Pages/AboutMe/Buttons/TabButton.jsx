const TabButton = ({ tab, children, handleTab, activeTab }) => (
    <button
        className={`p-4 border text-base-content sm:w-44 rounded-lg opacity-70 ${activeTab === tab
            ? "bg-base-100 cursor-default border-base-content"
            : "bg-neutral text-neutral-content opacity-50 border-transparent cursor-pointer hover:scale-95 hover:opacity-100 hover:border-neutral-content"
            }`}
        onClick={() => handleTab(tab)}
        disabled={activeTab === tab}
    >
        {children}
    </button>
);
export default TabButton