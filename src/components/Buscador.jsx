import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

export const Buscador = ({ onSearch }) => {
    const [localSearchTerm, setLocalSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const term = event.target.value;
        setLocalSearchTerm(term);
    };

    const handleSearch = () => {
        onSearch(localSearchTerm);
    };

    return (
        <Container className='d-flex justify-content-center'>
            <InputGroup className="w-50">
                <InputGroup.Text id="basic-addon1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Buscar Pokémon"
                    value={localSearchTerm}
                    onChange={handleInputChange}
                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
            </InputGroup>
        </Container>
    );
}
