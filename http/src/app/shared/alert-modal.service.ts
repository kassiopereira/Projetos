import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlertTypes{
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes, dimissTimeOut?:number){
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if(dimissTimeOut){
      setTimeout(() =>bsModalRef.hide(),dimissTimeOut)
    }

  }



  showAlertDanger(message: string){
    this.showAlert(message, AlertTypes.DANGER);
  }
  showAlertSuccess(message: string){
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }
}
