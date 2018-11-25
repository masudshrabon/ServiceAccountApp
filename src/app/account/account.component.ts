import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);

    this.loggingService.logStatusChanged(status);
    // console.log('A server status changed, new status: ' + status);
  }

}
