import * as yup from 'yup';

export const tableReservationValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  reservation_date: yup.date().required(),
  reservation_time: yup.string().required(),
  guest_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
