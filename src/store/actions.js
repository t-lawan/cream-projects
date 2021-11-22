export const SHOW_NAVBAR = 'SHOW_NAVBAR';
export const HIDE_NAVBAR = 'HIDE_NAVBAR';


export const showNavbar = () => {
    return {
        type: SHOW_NAVBAR
    }
}

export const hideNavbar = () => {
    return {
        type: HIDE_NAVBAR
    }
}

