import { Injectable } from "@angular/core";
import { MedicalAppointment } from '../model/medical-appointment.entity';
import { BaseService } from "../../shared/services/base.service";

@Injectable({
    providedIn: 'root'
  })
  export class MedicalAppointmentService extends BaseService<MedicalAppointment> {
    constructor() { 
      super();
      this.resourceEndPoint = '/api/v1/medical_appointments';
    }
  }
  
  
  