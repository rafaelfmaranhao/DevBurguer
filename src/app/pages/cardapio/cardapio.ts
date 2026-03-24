import { Component, Input } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Flashcards } from "../../components/flashcards/flashcards";
import { Card } from '../../models/card.model';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-cardapio',
  imports: [Header, Footer, LucideAngularModule, Flashcards],
  templateUrl: './cardapio.html',
  styleUrl: './cardapio.css'
})
export class Cardapio {
  @Input() nome = '';
  @Input() preco = '';
  @Input() descricao = '';
  @Input() urlFoto = '';

  flashCardJunior: Card[] = [
    {
      nome: 'DevStack Bacon',
      preco: 'R$ 32,90',
      descricao: 'Bacon crocante, queijo cheddar e molho especial',
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
  ];

  flashCardPleno: Card[] = [
    {
      nome: 'Green Code',
      descricao: 'Hambúrguer vegano de grão de bico e quinoa',
      preco: 'R$ 27.90',
      urlFoto: 'img/cardapio/veg-burger-1.jpg'
    },
    {
      nome: 'Plant Stack',
      descricao: 'Blend vegetal com queijo vegano e molho especial',
      preco: 'R$ 29.90',
      urlFoto: 'img/cardapio/veg-burger-2.jpg'
    },
    {
      nome: 'Eco Dev',
      descricao: 'Portobello grelhado com queijo e vegetais',
      preco: 'R$ 31.90',
      urlFoto: 'img/cardapio/veg-burger-3.jpg'
    },
    {
      nome: 'Zero Meat',
      descricao: 'Hambúrguer de soja premium com guacamole',
      preco: 'R$ 33.90',
      urlFoto: 'img/cardapio/veg-burger-4.jpg'
    }
  ];

  flashCardSenior: Card[] = [
    {
      nome: 'Full Stack Deluxe',
      descricao: 'Duplo de carne, bacon, cheddar, cebola caramelizada',
      preco: 'R$ 42.90',
      urlFoto: 'img/cardapio/burger-5.jpg'
    },
    {
      nome: 'API Gourmet',
      descricao: 'Blend especial, queijo brie, rúcula e geleia',
      preco: 'R$ 45.90',
      urlFoto: 'img/cardapio/burger-9.jpg'
    },
    {
      nome: 'Cloud Burger',
      descricao: 'Carne premium, queijos nobres e molho trufado',
      preco: 'R$ 48.90',
      urlFoto: 'img/cardapio/cloud-burger.jpg'
    },
    {
      nome: 'Enterprise Edition',
      descricao: 'O mais completo: 5 carnes, 5 queijos, bacon e extras',
      preco: 'R$ 55.90',
      urlFoto: 'img/cardapio/enterprise-burger.jpg'
    }
  ];
}
