import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ERP_KPIS, INVENTORY_ITEMS } from '../../data/brand.data';
import { SectionHeadingComponent } from '../common/section-heading.component';

@Component({
  selector: 'app-erp-showcase',
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section class="section alt" id="erp">
      <div class="container">
        <app-section-heading eyebrow="ERP dashboard showcase" title="Premium café frontend with SaaS-grade business operations"></app-section-heading>
        <div class="erp-layout">
          <div class="kpi-grid">
            @for (kpi of kpis; track kpi.label) {
              <article class="kpi card"><span>{{ kpi.label }}</span><strong>{{ kpi.value }}</strong><small>{{ kpi.delta }}</small></article>
            }
          </div>
          <div class="erp-grid">
            <article class="card chart-card">
              <h3>Revenue Trend</h3>
              <div class="bars"><span style="--h:45%"></span><span style="--h:60%"></span><span style="--h:52%"></span><span style="--h:74%"></span><span style="--h:68%"></span><span style="--h:88%"></span><span style="--h:95%"></span></div>
            </article>
            <article class="card chart-card">
              <h3>Sales by Category</h3>
              <div class="donut"></div>
              <ul class="legend"><li><span class="dot vanilla-dot"></span>Vanilla 28%</li><li><span class="dot choc-dot"></span>Chocolate 44%</li><li><span class="dot velvet-dot"></span>Red Velvet 28%</li></ul>
            </article>
            <article class="card board-card">
              <h3>Order Workflow</h3>
              <div class="kanban">
                <div><h4>New</h4><span>#MW1001</span><span>#MW1007</span></div>
                <div><h4>Accepted</h4><span>#MW1002</span></div>
                <div><h4>Preparing</h4><span>#MW1003</span><span>#MW1010</span></div>
                <div><h4>Ready</h4><span>#MW1005</span></div>
                <div><h4>Out for Delivery</h4><span>#MW1008</span></div>
                <div><h4>Delivered</h4><span>#MW0997</span></div>
              </div>
            </article>
            <article class="card inventory-card">
              <h3>Inventory</h3>
              <ul>
                @for (entry of inventory; track entry.item) {
                  <li><span>{{ entry.item }}</span><b [class.healthy]="entry.status === 'Healthy'" [class.low]="entry.status === 'Low'" [class.critical]="entry.status === 'Critical'">{{ entry.status }}</b></li>
                }
              </ul>
            </article>
            <article class="card crm-card">
              <h3>Customer CRM</h3>
              <table>
                <thead><tr><th>Name</th><th>Phone</th><th>Orders</th><th>Total Spend</th><th>Last Visit</th></tr></thead>
                <tbody>
                  <tr><td>Fathima A</td><td>+91 9XXXXXX421</td><td>12</td><td>₹2,840</td><td>Today</td></tr>
                  <tr><td>Aswin M</td><td>+91 9XXXXXX713</td><td>8</td><td>₹1,920</td><td>2 days ago</td></tr>
                  <tr><td>Nihal P</td><td>+91 9XXXXXX138</td><td>17</td><td>₹4,560</td><td>Yesterday</td></tr>
                </tbody>
              </table>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErpShowcaseComponent {
  readonly kpis = ERP_KPIS;
  readonly inventory = INVENTORY_ITEMS;
}
