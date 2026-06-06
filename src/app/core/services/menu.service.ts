import { Injectable, computed, signal } from '@angular/core';
import { MenuItem } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly items = signal<MenuItem[]>([
    { id: 'v1', name: 'Vanilla Bliss', price: 89, category: 'vanilla', rating: 4.8 },
    { id: 'v2', name: 'Vanilla Delight', price: 99, category: 'vanilla', rating: 4.7 },
    { id: 'v3', name: 'Double Delight', price: 109, category: 'vanilla', rating: 4.9 },
    { id: 'c1', name: 'Chocolate Heaven', price: 99, category: 'chocolate', rating: 4.8 },
    { id: 'c2', name: 'Choco Crunch', price: 109, category: 'chocolate', rating: 4.7 },
    { id: 'c3', name: 'Double Chocolate', price: 109, category: 'chocolate', rating: 4.9, popular: true },
    { id: 'c4', name: 'Choco Fantasy', price: 119, category: 'chocolate', rating: 5, popular: true },
    { id: 'r1', name: 'Red Velvet Fantasy', price: 109, category: 'red-velvet', rating: 4.8 },
    { id: 'r2', name: 'Vanilla Velvet', price: 109, category: 'red-velvet', rating: 4.7 },
    { id: 'r3', name: 'Crimson Delight', price: 124, category: 'red-velvet', rating: 4.9, popular: true }
  ]);

  readonly allItems = this.items.asReadonly();
  readonly bestSellers = computed(() => this.items().filter(item => item.popular));
}
