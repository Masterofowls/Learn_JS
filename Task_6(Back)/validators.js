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

export const userUpdateScheme = yup.object().shape({
    name: yup.string().min(2).max(30),
    lastname: yup.string().max(30),
    email: yup.string().email('Не верно указан email'),
    age: yup.number().integer().min(0).max(150),
    favorite: yup.boolean(),
    nickname: yup.string().max(30),
    description: yup.string().max(500),
    phone: yup.string().matches(/^\+?\d{7,15}$/, 'Неверный формат телефона'),
    image_link: yup.string().url('Неверная ссылка').max(500),
  }).noUnknown(true);


