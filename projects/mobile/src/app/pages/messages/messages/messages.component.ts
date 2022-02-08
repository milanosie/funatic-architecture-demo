import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../../../../core/src/lib/message.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    public filteredMessages = [];
    public messages = [];
    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.messageService.getMessages().subscribe((value) => {
            this.messages = value;
            this.filteredMessages = this.messages;
        });
    }

    openMessage(id): void {
        // todo
    }

    filterMessage(event: any): void {
        console.log(event);
        this.filteredMessages = this.messages.filter((v) => v.title.indexOf(event.detail.value) !== -1);
    }
}
