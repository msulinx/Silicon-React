import React, { createContext, useState, useContext } from 'react';

const ContextComponent = createContext ('');

export function ContextProvider ({children}) {

    const [theme, setTheme] = useState ('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    };


    const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	};

    return (
        <ContextComponent.Provider value={{ theme, toggleTheme, isOpen, toggleDropdown }}>
            {children}
        </ContextComponent.Provider>
    );
}

export const contextFunctions = () => useContext(ContextComponent)


