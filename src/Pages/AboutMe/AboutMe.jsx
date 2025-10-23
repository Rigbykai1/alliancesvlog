import { useState } from "react";
import { WORK_HISTORY } from './WORK_HISTORY'
import { STUDY_HISTORY } from './STUDY_HISTORY'
import CarrouselCard from "../../components/Card/CarrouselCard";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import ContactButton from "../../components/Buttons/ContactButton";
import PageButton from "./Buttons/PageButton";
import TabButton from "./Buttons/TabButton";
import ContactModal from "../../components/Buttons/ContactModal";
import ContactModalContent from "../../components/Buttons/ContactModalContent";

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState("laboral");
    const [page, setPage] = useState(0);
    const [contactOpen, setContactOpen] = useState(false);

    const data = activeTab === "laboral" ? WORK_HISTORY : STUDY_HISTORY;
    const itemsPerPage = 1;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const extractYear = (item) => {
        if (typeof item.year === "string") {
            const match = item.year.match(/\d{4}/);
            return match ? parseInt(match[0], 10) : 0;
        }
        if (typeof item.year === "number") {
            return item.year;
        }
        return 0;
    };

    const sortedData = [...data].sort((a, b) => extractYear(a) - extractYear(b));
    const paginated = sortedData.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

    const handleTab = (tab) => {
        setActiveTab(tab);
        setPage(0);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row gap-2">
                <PageButton onClick={handlePrev} disabled={page === 0}>
                    <TfiAngleLeft />
                </PageButton>
                <div className="flex flex-col sm:flex-row gap-2">
                    <TabButton tab="laboral" handleTab={handleTab} activeTab={activeTab}>Historial laboral</TabButton>
                    <TabButton tab="academico" handleTab={handleTab} activeTab={activeTab}>Historial académico</TabButton>
                </div>
                <PageButton onClick={handleNext} disabled={page === totalPages - 1}>
                    <TfiAngleRight />
                </PageButton>
            </div>
            <div className="flex flex-col items-center justify-center text-center my-4 space-y-2">
                <span className="py-2">{page + 1} / {totalPages}</span>
                <CarrouselCard
                    paginated={paginated}
                    page={page}
                    totalPages={totalPages}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    activeTab={activeTab}
                />
            </div>
            <div className="flex flex-col gap-4 pb-4">
                <p className="font-medium text-lg max-w-md">¿Interesado en trabajar conmigo?</p>
                <ContactButton onOpen={() => setContactOpen(true)} />
                <ContactModal
                    open={contactOpen}
                    onClose={() => setContactOpen(false)}
                    modalContent={<ContactModalContent />}
                />
            </div>
        </div>
    );
};

export default AboutMe;