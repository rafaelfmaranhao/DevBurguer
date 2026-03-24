import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Slides } from '../../components/slides/slides';
import { FrasesSlider } from "../../components/frases-slider/frases-slider";
import { Flashcards } from '../../components/flashcards/flashcards';
import { Footer } from '../../components/footer/footer';
import { Card } from '../../models/card.model';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, Slides, Flashcards, Footer, LucideAngularModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  flashCard: Card[] = [
    {
      nome: 'DevStack Bacon',
      descricao: 'Bacon crocante, queijo cheddar e molho especial',
      preco: 'R$ 32,90',
      urlFoto: 'img/cardapio/burger-1.jpg' 
    },
    {
      nome: 'Classic Debug',
      descricao: 'Hambúrguer duplo com molho secreto',
      preco: 'R$ 28,90',
      urlFoto: 'img/cardapio/burger-2.jpg'
    },
    {
      nome: 'BBQ.js Burguer',
      descricao: 'Bacon, onion rings e molho BBQ defumado',
      preco: 'R$ 35.90',
      urlFoto: 'img/cardapio/burger-3.jpg'
    },
    {
      nome: 'Spicy Exception',
      descricao: 'Frango empanado, jalapeños e queijo pepper jack',
      preco: 'R$ 30.90',
      urlFoto: 'img/cardapio/burger-4.jpg'
    }
  ]
}
