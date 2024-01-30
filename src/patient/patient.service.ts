import { Injectable } from '@nestjs/common';
import { Patient } from './patient.module';


export interface PatientInput {
    name: string;
  }

@Injectable()
export class PatientService {
    async doesPatientExist(patientId: number) {
      throw new Error('Method not implemented.');
    }
    async register(patientInput: PatientInput): Promise<Patient> {
      return {
        id: 1,
        name: patientInput.name,
      };
    }
  }
