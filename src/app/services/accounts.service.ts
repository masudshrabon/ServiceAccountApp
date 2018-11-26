import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

/**
 * If you inject a SERVICE into SOMETHING,
 * this SOMETHING needs to have some META data attached to it.
 * eg., SOMETHING = component, has meta data because it has @Component() decorator.
 * SOMETHING = directive, has meta data because it has @Directive() decorator.
 *
 * But a SERVICE has no meta data.
 * So, in such cases, a special decorator (or meta data) @Injectable() is used.
 * It tells angular that this service (AccountsService) is now injectable, i.e.,
 * something can be injected there to be precised.
 *
 * @Injectable() is used in the place WHERE something is injected (who will receive the services (AccountsService)),
 * but NOT in the place of Which service (LoggingService) is injected.
 */
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChanged(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChanged(status);
  }
}
