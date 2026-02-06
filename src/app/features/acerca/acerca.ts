import { Component } from '@angular/core';
import { Hero2 } from "../../shared/hero2/hero2";
import { Card } from "../../shared/card/card";
import { Components } from "../../shared/components/components";
import { Portfolio } from "../../shared/portfolio/portfolio";
import { Hero } from '../../shared/hero/hero';
import { Servicio } from "../../shared/servicio/servicio";

@Component({
  selector: 'app-acerca',
  imports: [Hero, Card, Components, Portfolio, Servicio],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {
  
}
