import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from './../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountsService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({ name: accountName, status: accountStatus });

    /** Instead of creating an instance of LoggingService manually, just inject it.
     * Angular is responsible to create and pass the instance of the service as defined in the constructor and provider attribute.
     */
    // this.loggingService.logStatusChanged(accountStatus);
    // const loggingService = new LoggingService();
    // loggingService.logStatusChanged(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
