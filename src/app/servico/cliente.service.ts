import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Cliente } from '../modelo/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlListar: string = 'http://localhost:8080/listar';

  private urlCadastrar: string = 'http://localhost:8080/cadastro';

  private urlEditar: string = 'http://localhost:8080/editar';

  private urlRemover: string = 'http://localhost:8080/remover';

  constructor(private http: HttpClient) { }


  selecionar(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(this.urlListar);
  }

  cadastrar(obj: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlCadastrar, obj);
  }


  editar(obj: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.urlEditar, obj);
  }


  remover(codigo: number): Observable<void> {

    return this.http.delete<void>(this.urlRemover + "/" + codigo);

  }
}
