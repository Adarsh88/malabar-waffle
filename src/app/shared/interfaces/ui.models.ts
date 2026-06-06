export interface NavLink { label: string; href: string; route?: string; }
export interface HighlightCard { title: string; description: string; }
export interface Testimonial { quote: string; author: string; location: string; }
export interface KpiCard { label: string; value: string; delta: string; }
export interface FranchiseBenefit { title: string; description: string; }
export interface InventoryStatus { item: string; status: 'Healthy' | 'Low' | 'Critical'; }
