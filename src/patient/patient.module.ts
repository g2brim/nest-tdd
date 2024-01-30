import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';

export interface Patient {
    id: number;
    name: string;
  }

@Module({
  providers: [PatientService],
  exports: [PatientService]
})

// src/patient/patient.model.ts
export class PatientModule {}
