import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ApisService } from '@shared/services/apis.service';
import { ReplyAccessToken } from '@models/replyAccessToken';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  replyData = {};

  constructor(
    private route: ActivatedRoute,
    private apisServices: ApisService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.replyData = { ...params['params'] };
      this.sendDataToServer();
    });
  }

  sendDataToServer() {
    const apiID = sessionStorage.getItem('APIRequested') || null;
    const requestName = sessionStorage.getItem('request') || null;
    const body = {
      request: requestName,
      reply: { ...this.replyData }
    };
    if (apiID) {
      this.apisServices.requestAccessToken(apiID, body)
        .then((resp: ReplyAccessToken) => {
          if (resp.finish) {
            sessionStorage.removeItem('request');
            sessionStorage.removeItem('APIRequested');
            window.close();
            return;
          }
          if (resp.request) this.newExternalRequest(resp);
        })
        .catch((error) => console.debug(error));
    }
  }

  newExternalRequest(request: ReplyAccessToken) {
    const requestParams = request.request;
    this.apisServices.externalRequest(requestParams.method, requestParams.uri, requestParams.headers, requestParams.body)
      .then((data: any) => {
        this.replyData = { ...data };
        sessionStorage.setItem('request', request.requestType);
        this.sendDataToServer();
      })
      .catch((error) => console.debug(error));
  }

}
