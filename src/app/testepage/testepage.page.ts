import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testepage',
  templateUrl: './testepage.page.html',
  styleUrls: ['./testepage.page.scss'],
})
export class TestepagePage implements OnInit {
  public nomeUtilizador = "Joao Alexandre"; 

  constructor() { }

  private Mensagem(){

    alert("ola");  
    return
  }


  ngOnInit() {
    this.Mensagem();
  }

}
