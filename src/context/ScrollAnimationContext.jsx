import { createContext, useContext, } from "react";

const SectionContext = createContext();

function SectionProvider({children}) {
    
    function handleScrollIntoView(sectionRef) { 
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <SectionContext.Provider value={
            {
                handleScrollIntoView,
            } 
        }>
            {children}
        </SectionContext.Provider>
    )
}



function useSection() {
    const context = useContext(SectionContext);                     
    if(context === undefined) throw new Error('SectionContext was used outside of provider');
    return context;
}

export { SectionProvider, useSection };