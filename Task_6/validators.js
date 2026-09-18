import * as yup from 'yup'

const REQUIRED_ERROR_MESSAGE = 'Поле обязательно к заполнению'

export const userCreateScheme = yup.object().shape({
    name: yup.string()
        .min(2, 'Укажите не менее двух символов')
        .max(30, 'Укажите не более 30 символов')
        .required(REQUIRED_ERROR_MESSAGE),
    lastname: yup.string()
        .max(30, 'Укажите не более 30 символов')
        .required(REQUIRED_ERROR_MESSAGE),
    email: yup.string()
        .email('Не верно указан email')
        .required(REQUIRED_ERROR_MESSAGE)
})

export const userDeleteScheme = yup.object().shape({
  
})

export const userUpdateScheme = yup.object().shape({
  
})

export const changeFavoriteScheme = yup.object().shape({
  
})
