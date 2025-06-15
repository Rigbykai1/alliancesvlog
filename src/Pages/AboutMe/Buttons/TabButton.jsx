const TabButton = ({ tab, children, handleTab, activeTab }) => (
    <button
        className={`p-4 border text-blue-50 sm:w-44 rounded-lg opacity-70 ${activeTab === tab
            ? "bg-green-300/20 cursor-default border-green-300"
            : "bg-stone-700 opacity-50 border-transparent cursor-pointer hover:scale-95 hover:opacity-100 hover:border-green-300"
            }`}
        onClick={() => handleTab(tab)}
        disabled={activeTab === tab}
    >
        {children}
    </button>
);
export default TabButton