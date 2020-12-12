export interface IUser {
  _id: string;
  role: string;
  active: boolean;
  username: string;
  email: string;
  password: string;
  rating: number;
  date: string;
  products: [];
  purchases: [];
  cart: [];
}

// export class IUser {
//   private username: string;
//   private email: string;
//   private password: string;
//   private rating: number;
//   private date: string;
//   private purchases: [];
//   private products: [];
//   private cart: [];
//
//   constructor() {
//   }
// }
