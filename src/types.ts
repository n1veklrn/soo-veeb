export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}