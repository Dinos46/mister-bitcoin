import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/models/bitcoin.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./_statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  // charts = [{}]

  marketPrices: any;
  chartType: any = 'Line'
  transactions: any

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<void> {
    // const usdExchange = await this.bitcoinService.getUSDExchangeTradeVolume().toPromise()
    // const averageBlock = await this.bitcoinService.getAverageBlockSize().toPromise()
    // const marketPrice = await this.bitcoinService.getMarketPrice().toPromise()
    // this.charts = [usdExchange, averageBlock, marketPrice]

    this.marketPrices = this.bitcoinService.getMarketPrice()
      .map(price => [new Date(price.x * 1000).toLocaleDateString('en-US', { month: '2-digit', year: '2-digit' }), price.y])

      // this.transactions = await this.bitcoinService.getConfirmedTransactions().toPromise()
    console.log(this.transactions)
  }
}
