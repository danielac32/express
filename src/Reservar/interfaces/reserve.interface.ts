export interface Reserve {
  startDate: Date;
  endDate: Date;
  requerimiento: string;
  cantidad_persona: number;
  descripcion: string;
  state: string;
  userId: number;
  salonId: number;
}

// export type StatusReserve = 'pending' | 'refused' | 'accepted';

export enum StatusReserve {
  PENDING = 'pending',
  REFUSED = 'refused',
  ACCEPTED = 'accepted'
};