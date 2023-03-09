export type Booking = {
  id: any;
  professionalId: any;
  initialHour: number | string;
  finalHour: number | string;
  clientName: string;
  serviceName: string;
}


export const Bookings: Booking[] = [
  {
    id: 1,
    professionalId: 1,
    initialHour: "08:45",
    finalHour: "09:30",
    clientName: "Mary",
    serviceName: "Manicure",
  },
  {
    id: 2,
    professionalId: 1,
    initialHour: "09:45",
    finalHour: "10:15",
    clientName: "Jane",
    serviceName: "Penteado",
  },
]