import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tchnologies',
    templateUrl: './tchnologies.page.html',
    styleUrls: ['./tchnologies.page.scss'],
})
export class TchnologiesPage implements OnInit {

    activeTab = 'java';

    constructor() {
    }

    ngOnInit() {
    }

    segmentChanged(ev: any) {
        this.activeTab = ev.detail.value;
        console.log('Segment changed', ev.detail.value);
    }
}
