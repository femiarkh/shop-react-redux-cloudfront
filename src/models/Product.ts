import * as Yup from 'yup';

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required().max(32),
  description: Yup.string().required().max(64),
  price: Yup.number().required().positive().max(9999),
  count: Yup.number().required().integer().min(0).max(9999),
  image: Yup.string().url(),
});
