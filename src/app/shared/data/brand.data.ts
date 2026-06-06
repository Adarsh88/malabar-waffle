import { FranchiseBenefit, HighlightCard, InventoryStatus, KpiCard, NavLink, Testimonial } from '../interfaces/ui.models';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', route: '/' },
  { label: 'Menu', href: '#menu', route: '/menu' },
  { label: 'Our Story', href: '#story', route: '/our-story' },
  { label: 'Locations', href: '#locations', route: '/locations' },
  { label: 'Franchise', href: '#franchise', route: '/franchise' },
  { label: 'ERP Dashboard', href: '#erp', route: '/erp' },
  { label: 'Contact', href: '#contact', route: '/contact' }
];

export const HERO_HIGHLIGHTS: HighlightCard[] = [
  { title: 'Freshly Made', description: 'Cooked to order with warm fillings and café-grade finish.' },
  { title: '100% Quality Ingredients', description: 'Premium creams, syrups, waffle mix, and signature textures.' },
  { title: 'Fast Delivery', description: 'Optimized kitchen and dispatch flow for quick service.' }
];

export const ERP_KPIS: KpiCard[] = [
  { label: 'Orders Today', value: '248', delta: '+12.4%' },
  { label: 'Revenue Today', value: '₹28,460', delta: '+8.1%' },
  { label: 'Monthly Revenue', value: '₹7.4L', delta: '+19.3%' },
  { label: 'Customer Growth', value: '18.2%', delta: 'Repeat users rising' }
];

export const INVENTORY_ITEMS: InventoryStatus[] = [
  { item: 'Waffle Mix', status: 'Healthy' },
  { item: 'Vanilla Cream', status: 'Low' },
  { item: 'Chocolate Syrup', status: 'Healthy' },
  { item: 'Red Velvet Base', status: 'Critical' },
  { item: 'Packaging Materials', status: 'Low' }
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'A premium Kerala dessert experience.', author: 'Nisha', location: 'Kozhikode' },
  { quote: 'Fast delivery, rich flavor, elegant packaging.', author: 'Arjun', location: 'Palakkad' },
  { quote: 'Feels local and modern at the same time.', author: 'Shamil', location: 'Malappuram' }
];

export const FRANCHISE_BENEFITS: FranchiseBenefit[] = [
  { title: 'Investment-ready model', description: 'Premium dessert concept tuned for dine-in, takeaway, and delivery.' },
  { title: 'Operational support', description: 'Training, SOPs, branding assets, and ERP onboarding support.' },
  { title: 'Scalable returns', description: 'Healthy ROI potential through repeat dessert demand and strong branding.' }
];
