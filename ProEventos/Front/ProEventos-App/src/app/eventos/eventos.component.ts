import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any; // eventos declarada, que recebera a ligação através da interpolação no html

  constructor(private http: HttpClient) { } // HttpCliente inserido no constructor obs: variável de no 'http' após 'private'

  ngOnInit(): void { //ngOnInit executa antes da requisição pro html
    this.geteventos();// devido a funão do ngOninit getEventos precisa ser inserido após ser declarado, caso contrário não aprecerá na aplicação
  }

  /* O objetivo de encapsular a lógica de população do array eventos dentro da função geteventos()
    é separar a obtenção dos dados da lógica de inicialização do componente. Essa abordagem é útil
    quando você precisa buscar dados de forma assíncrona, como por meio de uma requisição HTTP,
    o que será feito nessa atividade, os dados dos eventos serão obtidos de um serviço backend
    através de uma requisição HTTP, a função geteventos() irá conter a chamada ao serviço e
    a manipulação da resposta para preencher o array eventos. Dessa forma, separar essa lógica
    em um método separado permite manter o código mais organizado e reutilizável. As informações em
    getEventos irão ser buscadas em um banco de dados, não sendo assim estáticas.
  */

  public geteventos(): void {

    this.http.get( ' https://localhost:5001/api/Eventos ' ).subscribe(
      response => this.eventos = response,
      error => console.log (error)
      );

  }
}