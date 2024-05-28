import { Box, Button, TextField, Typography } from '@mui/material'
import PropTypes from 'prop-types';

const FormularioNoticia = ({ onSubmit, titulo, setTitulo, subtitulo, setSubtitulo, texto, setTexto, buttonText }) => {

    return (
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 3 }}>
            <Typography variant="h4" gutterBottom>Cadastrar Notícia</Typography>
            <TextField
                label="Título"
                fullWidth
                margin="normal"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <TextField
                label="Subtítulo"
                fullWidth
                margin="normal"
                value={subtitulo}
                onChange={(e) => setSubtitulo(e.target.value)}
            />
            <TextField
                label="Texto"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                {buttonText}
            </Button>
        </Box>
    )
}

FormularioNoticia.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    titulo: PropTypes.string.isRequired,
    setTitulo: PropTypes.func.isRequired,
    subtitulo: PropTypes.string.isRequired,
    setSubtitulo: PropTypes.func.isRequired,
    texto: PropTypes.string.isRequired,
    setTexto: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default FormularioNoticia