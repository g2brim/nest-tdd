import { Injectable } from '@nestjs/common';
import { Patient } from './patient.module';


export interface PatientInput {
    name: string;
  }

@Injectable()
export class PatientService {
    private readonly patients: Patient[] = [];
    
    async doesPatientExist(patientId: number) {
        return this.patients.some((patient) => patient.id === patientId);
    }
    async register(patientInput: PatientInput): Promise<Patient> {
        const newPatient = {
            id: 1,
            name: patientInput.name,
          };
          this.patients.push(newPatient);
          return newPatient;
    }
  }
