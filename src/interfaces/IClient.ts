import {IAddress} from './IAddress'

export interface IClient {
  name: String;
  email: String;
  last_name: String;
  address: IAddress;
  phone_number: Number;
}