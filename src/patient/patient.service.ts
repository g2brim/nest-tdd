import { Injectable } from '@nestjs/common';
import { Patient } from './patient.module';


export interface PatientInput {
    name: string;
  }

@Injectable()
export class PatientService {
    private readonly patients: Patient[] = [];
    
    async doesPatientExist(patientId: number) {
      return false;
    }
    async register(patientInput: PatientInput): Promise<Patient> {
      return {
        id: 1,
        name: patientInput.name,
      };
    }
  }
