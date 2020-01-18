import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Import Models
import { Apis } from '@models/apis';

// Import Services
import { ApisService } from "@shared/services/apis.service";

@Component({
  selector: 'app-modal-connect-account',
  templateUrl: './modal-connect-account.component.html',
  styleUrls: ['./modal-connect-account.component.css']
})
export class ModalConnectAccountComponent implements OnInit {

  @Output() changeStateStoreModal = new EventEmitter<Boolean>();

  loading: boolean = false;
  loadingError: boolean = false;
  integrations: Apis[] = [];

  constructor(private apisServices: ApisService) {
    this.getAllApis();
  }

  ngOnInit() {
    this.loading = true;

  }

  getAllApis() {
    this.apisServices.getAll().subscribe(
      (data: Apis[]) => {
        this.integrations = data;
      },
      (error) => {
        this.loadingError = true;
        console.error(error);
        console.log('An error has occurred!');
      },
      () => {
        this.loading = false;
      }
    );
  }

  closeStoreModal() {
    this.changeStateStoreModal.emit(false);
  }

}
