
const validation = (dogData) => {
    const errors = {}
    //Validaciones campos vacíos
    if(!dogData.name) {
        errors.name = 'Dog Name is required';
    }
    if(!dogData.minHeight || !dogData.maxHeight) {
        errors.height = 'Dog Height is required';
    }
    if(!dogData.minWeight || !dogData.maxWeight) {
        errors.weight = 'Dog weight is required';
    }
    if(!dogData.life_span) {
        errors.life_span = 'Life span is required, type only numbers separated by a dash (-)';
    }   
    if(!dogData.image) {
        errors.image = 'Dog image is required';
    }
    if(dogData.temperaments.length === 0) {
        errors.temperaments = 'Dog temperaments are required';
    }

    //Validaciones height y weight
    if (parseInt(dogData.maxHeight) <= parseInt(dogData.minHeight)) {
        errors.height = "max-Height must be highter than min-Height";
    }
    if (parseInt(dogData.maxWeight) <= parseInt(dogData.minWeight)) {
        errors.weight = "max-Weight must be highter than min-Weight";
    }
    return errors;  
}

export default validation;