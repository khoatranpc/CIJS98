import { createContext, useState } from "react";

const initDic = {
    lang: 'VI',
    setLang: (lang) => { }
}
export const StoreDic = createContext(initDic);

const StoreDicProvider = (props) => {
    const [lang, setLang] = useState('EN');

    return <StoreDic.Provider value={{
        lang: lang,
        setLang
    }}>
        {props.children}
    </StoreDic.Provider>
}

export default StoreDicProvider;
