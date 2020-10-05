export interface ICharge {
  source_id: String;
  method: String;
  amount: Number;
  currency: String;
  description: String;
  device_session_id: String;
}