import { Injectable } from '@nestjs/common';
import { Patient } from './patient.module';


export interface PatientInput {
    name: string;
  }

@Injectable()
export class PatientService {
    private readonly patients: Patient[] = [];
    // added a private counter
    private nextId = 1;

    
    async doesPatientExist(patientId: number) {
        return this.patients.some((patient) => patient.id === patientId);
    }
    async register(patientInput: PatientInput): Promise<Patient> {
        const newPatient = {
            // now we use this new counter and increase it in every call
            id: this.nextId++,
            name: patientInput.name,
          };
          this.patients.push(newPatient);
          return newPatient;
    }
  }
