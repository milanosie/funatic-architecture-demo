import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../../../../core/src/lib/message.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    private amount = 40;
    public filteredMessages = [];
    public messages = [];
    private searchTerm = '';

    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.getMessages();
    }

    private getMessages(): void {
        this.messageService.getMessages().subscribe((value) => {
            this.messages = value;
            this.filteredMessages = this.messages.filter((v) => v.id < this.amount);
        });
    }

    openMessage(id): void {
        // todo
    }

    filterMessage(event: any): void {
        this.searchTerm = event.detail.value;
        this.filteredMessages = this.messages.filter((v) => v.title.indexOf(this.searchTerm) !== -1 && v.id < this.amount);
    }

    loadMoreData($event: any): void {
        setTimeout(() => {
            this.amount += 10;
            this.filteredMessages = this.messages.filter((v) => v.title.indexOf(this.searchTerm) !== -1 && v.id < this.amount);
            $event.target.complete();
        }, 1000);
    }

    doRefresh($event: any): void {
        setTimeout(() => {
            this.amount = 40;
            this.searchTerm = '';
            this.getMessages();
            $event.target.complete();
        }, 1000);
    }
}
