import { createContext, useEffect, useState } from 'react'

type Tema = 'dark' | '';

interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
    const [tema, setTema] = useState<string | null>('dark')

    useEffect(() => {
        const temaSalvo = localStorage.getItem("tema");
        setTema(temaSalvo);
    }, [])

    const alternarTema = () => {
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem("tema", novoTema)
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;
export const AppConsumer = AppContext.Consumer;

