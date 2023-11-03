import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  order_time: yup.string().required(),
  total_price: yup.number().integer().required(),
  guest_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
});
