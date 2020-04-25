import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '@env';

// Import Models
import { ReplyApi } from '@models/replyApi';

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
  integrations: ReplyApi[] = [];

  windowRequestAccessToken: Window = null;

  constructor(private apisServices: ApisService) {
  }

  ngOnInit() {
    this.loading = true;
    this.getAllApis();
  }

  getAllApis() {
    this.apisServices.getAll().subscribe(
      (data: ReplyApi[]) => {
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

  openWindowRequestAccessToken(apiId: string) {
    if (!this.windowRequestAccessToken) {
      this.apisServices.requestAccessToken(apiId)
        .then((value: any) => {
          this.windowRequestAccessToken = window.open(`${value.uri}`, '_blank', "toolbar=no,scrollbars=yes,resizable=yes,width=600,height=600");
          const self = this;
          const pollTimer = window.setInterval(function () {
            if (self.windowRequestAccessToken.closed !== false) { // !== is required for compatibility with Opera
              window.clearInterval(pollTimer);
              self.windowRequestAccessToken = null;
            }
          }, 200);
        })
        .catch((err) => console.log(err));
    }
  }

}
