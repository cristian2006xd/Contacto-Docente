import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { NavBar } from './shared/nav-bar/nav-bar';
import { Hero } from './shared/hero/hero';
import { initFlowbite } from 'flowbite';
import { Blog } from './shared/blog/blog';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, NavBar, Hero, Blog, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    initFlowbite
  }
}
