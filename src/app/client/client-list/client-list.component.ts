import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { PageEvent, MatPaginatorIntl } from '@angular/material';
import { MatPaginatorIntlEs } from './myPaginatorEs';
import { MatPaginatorIntlPo } from './myPaginatorPo';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlEs}]
  // providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlPo}]
})
export class ClientListComponent implements OnInit, OnDestroy {
  clients: Client[] = [];
  isLoading = false;
  totalClients = 0;
  clientsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private clientSub: Subscription;

  constructor(public clientService: ClientService) {}

    ngOnInit() {
      this.isLoading = true;
      this.clientService.getClients(this.clientsPerPage, this.currentPage);
      this.clientSub = this.clientService.getClientUpdateListener()
      .subscribe(
        (clientData: {clients: Client[], clientCount: number}) => {
          this.isLoading = false;
          this.clients = clientData.clients;
          this.totalClients = clientData.clientCount;
        }
      );
    }

    onDelete(clientId: string) {
      this.isLoading = true;
      this.clientService.deleteClient(clientId).subscribe(() => {
        this.clientService.getClients(this.clientsPerPage, this.currentPage);
      });
    }

    onChangePage(pageData: PageEvent) {
      console.log(pageData);
      this.isLoading = true;
      this.currentPage = pageData.pageIndex + 1;
      this.clientsPerPage = pageData.pageSize;
      this.clientService.getClients(this.clientsPerPage, this.currentPage);
    }

    ngOnDestroy() {
      this.clientSub.unsubscribe();
    }
  }

