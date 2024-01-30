import { Module } from "@nestjs/common";
import { PatientModule } from "src/patient/patient.module";
import { AppointmentService } from "./appointment.service";

export interface Appointment{
    patientId: number;
    startTime: Date;
    endTime: Date;
    confirmed: boolean;
}

@Module({
    imports: [PatientModule],
    providers: [AppointmentService],
  })
  export class AppointmentModule {}