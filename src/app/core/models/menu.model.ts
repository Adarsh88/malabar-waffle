export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'vanilla' | 'chocolate' | 'red-velvet';
  rating: number;
  popular?: boolean;
}
