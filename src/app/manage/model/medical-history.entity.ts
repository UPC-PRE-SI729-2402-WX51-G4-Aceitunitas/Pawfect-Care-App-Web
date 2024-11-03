export class MedicalHistory  {
  id: number;
  petName: string;
  date: string;
  diagnosis: string;
  treatment: string;

  constructor(record: {
    id?: number,
    petName?: string,
    date?: string,
    diagnosis?: string,
    treatment?: string
  }) {
    this.id = record.id || 0;
    this.petName = record.petName || '';
    this.date = record.date || '';
    this.diagnosis = record.diagnosis || '';
    this.treatment = record.treatment || '';
  }
}
