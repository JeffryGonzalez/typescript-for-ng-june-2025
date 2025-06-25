import { Component, ChangeDetectionStrategy } from '@angular/core';
import { getSuperSecretkeyOnlyForAppointmentUse } from './utils/super-secret-appointment-only';

@Component({
  selector: 'app-appointments',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h1>Appointments</h1>
    <p>{{ f }}</p>
  `,
  styles: ``,
})
export class Appointments {
  f = getSuperSecretkeyOnlyForAppointmentUse('bird');
}
