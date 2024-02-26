import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataTransmitter } from '../helperclasses/DataTransmitter';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { this.transfterSubject = new Subject<any>(); }

  private transfterSubject:any;

  dataTransmitter(data: any) {
    return this.transfterSubject.next(data);
  }

  dataReceiver(): Observable<any> {
    return this.transfterSubject.asObservable();
  }

  transmit_data(type:string, data:any) {
    var dt = new DataTransmitter(type, data);
    this.dataTransmitter(dt.transmit());
  }
}
