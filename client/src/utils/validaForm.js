
export const validateFormData = (formData) => {
    const errors = {};

    if (!formData.name || /\d/.test(formData.name)) errors.name = 'Nombre inválido';
    if (!formData.imagen) errors.imagen = 'Imagen es requerida';
    if (!formData.vida || formData.vida < 0) errors.vida = 'Vida inválida';
    if (!formData.ataque || formData.ataque < 0) errors.ataque = 'Ataque inválido';
    if (!formData.defensa || formData.defensa < 0) errors.defensa = 'Defensa inválida';
    if (formData.velocidad && formData.velocidad < 0) errors.velocidad = 'Velocidad inválida';
    if (formData.altura && formData.altura < 0) errors.altura = 'Altura inválida';
    if (formData.peso && formData.peso < 0) errors.peso = 'Peso inválido';
    if (formData.types.length === 0) errors.types = 'Debe seleccionar al menos un tipo';

    return errors;
};
