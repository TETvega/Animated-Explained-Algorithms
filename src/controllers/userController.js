
export const index = (req, res) => {
    res.render('auth/index' , {
        title : 'Prueba Ejs'
    })
}

export const aboutUs = (req, res) => {
    res.render('auth/aboutUs' , {
        title : 'Sobre Nosotros'
    })
}

export const binarySearch = (req, res) => {
    res.render('auth/searchAlgorithms/binarySearch' , {
        title : 'Busqueda Binaria'
    })
}
