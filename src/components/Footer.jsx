export const Footer = () => {
    const textStyle = {
        fontSize: '3.5rem',
        color: 'yellow', 
        textShadow: '1px 1px 0 blue, 2px 2px 0 blue, 3px 3px 0 blue', // Efecto 3D con sombra azul
        WebkitTextStroke: '0.1px blue', // Contorno azul
    };

    return (
        <footer className="text-center mt-5 mb-2">
            <hr />
            <p style={textStyle}>
                "¡Hazte con todos! - Pokémon"
            </p>
        </footer>
    );
};
