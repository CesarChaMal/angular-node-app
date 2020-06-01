import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class ClientService {
  private clients: Client[] = [];
  private clientUpdated = new Subject<{clients: Client[], clientCount: number}>();
  private uri = 'http://localhost:3000/api/client/';
  // private uri = 'https://angular-node-app-heroku.herokuapp.com/api/client/';
  // private uri = 'api/client/';

  constructor(private http: HttpClient, private router: Router) {}

  getClients(clientPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${clientPerPage}&page=${currentPage}`;
    this.http.get<{ message: string; clients: any, maxClients: number}>(this.uri + queryParams)
    .pipe(map((clientData) => {
      return {
        clients: clientData.clients.map(client => {
          return {
            id: client._id,
            client: client.client,
            product: client.product,
            address: client.address,
            phone: client.phone,
            extras: client.extras
          };
        }),
        maxClients: clientData.maxClients
      };
    }))
    .subscribe(transformedClientData => {
      console.log(transformedClientData);
      Object.keys(transformedClientData).forEach(e => console.log(`key=${e}  value=${transformedClientData[e]}`));
      this.clients = transformedClientData.clients;
      this.clientUpdated.next({clients: [...this.clients], clientCount: transformedClientData.maxClients});
    });
  }

  getClientUpdateListener() {
    return this.clientUpdated.asObservable();
  }

  getClient(id: string) {
    return this.http.get<{id: string, client: string, product: string, address: string, phone: string, extras: boolean[]}>(this.uri + id);
  }

  addClient(client: string, product: string, address: string, phone: string, extras: boolean[]) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data;boundary=' + Math.random());
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa('username:password'));

/*
    console.log(client);
    console.log(product);
    console.log(address);
    console.log(phone);
    console.log(extras);
 */

    let clientData: Client | FormData;

    // clientData = new FormData();
    // clientData.append('client', client);
    // clientData.append('product', product);
    // clientData.append('address', address);
    // clientData.append('phone', phone);
    // clientData.append('extras', extras);

    clientData = {
      id: '',
      client: client,
      product: product,
      address: address,
      phone: phone,
      extras: extras
    };

    console.log('Client data to be send to save: ');
    console.log(clientData);
    // clientData.forEach((value, key) => {
    //   console.log(key + ': ' + value);
    // });
    Object.keys(clientData).forEach(e => console.log(`key=${e}  value=${clientData[e]}`));


    this.http
    // .post<{ message: string, clientModel: Client }>(this.uri, clientData)
    .post<{ message: string, clientModel: Client, headers: { headers: HttpHeaders } }>(this.uri, clientData, { headers })
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['/']);
    });
  }

  updateClient(id: string, client: string, product: string, address: string, phone: string, extras: boolean[]) {
    let clientData: Client | FormData;

      // clientData = new FormData();
      // clientData.append('id', id);
      // clientData.append('client', client);
      // clientData.append('product', product);
      // clientData.append('address', address);
      // clientData.append('phone', phone);
      // clientData.append('extras', extras);

    clientData = {
      id: id,
      client: client,
      product: product,
      address: address,
      phone: phone,
      extras: extras
    };

    console.log('Client data to be send to update: ');
    console.log(clientData);
    // clientData.forEach((value, key) => {
    //   console.log(key + ': ' + value);
    // });
    Object.keys(clientData).forEach(e => console.log(`key=${e}  value=${clientData[e]}`));

    this.http.put(this.uri + id, clientData).
    subscribe(response => {
      // const updatedPosts = [...this.client];
      console.log(response);
      this.router.navigate(['/']);
    });
}

  deleteClient(clientId: string) {
    // this.http.delete(this.uri + postId)
    // .subscribe(() => {
    //   const updatedPosts = this.posts.filter(post => post.id !== postId);
    //   this.posts = updatedPosts;
    //   this.postsUpdated.next([...this.posts]);
    // });
    return this.http.delete(this.uri + clientId);
  }
}

