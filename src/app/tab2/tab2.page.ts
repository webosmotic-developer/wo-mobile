import {Component} from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    serviceAccordian: any = [
        {isOpen: false},
        {isOpen: false},
        {isOpen: false},
        {isOpen: false},
    ];
    servicesArr: any = [{
        icon: 'home',
        title: 'Product Development',
        description: 'Our capabilities allow you to initiate software product development outsourcing easily, quickly and securely, whether you require a team of two dedicated developers or a full team. We have flexible engagement models that will fit perfectly into your way of working.\n' +
        '\n' +
        'WebOsmotic has successfully helped our clients build their software products on time and on budget. Our teams have vast experience across technology platforms and solutions, delivering expertise throughout the whole product life cycle'
    },
        {
            icon: 'apps',
            title: 'Application Development\n',
            description: 'We provide technology expertise - most of our developers have been working in their specific software domain for at least four years. We use best practices in software development and we make sure the whole development process is transparent, with frequent deliveries and reviews. With re-confirmed requirements and proper project design and planning your project can most likely be rescued.'
        }
        , {
            icon: 'phone-portrait',
            title: 'Responsive Design',
            description: 'We can analyze the project issues, provide recommended actions and take over the development work from current vendor or team. With re-confirmed requirements and proper project design and planning your project can most likely be rescued. Flexible and scalable architectures.\n' +
            '\n' +
            'We create outstanding web applications. We value practical solutions, beautiful and intelligent designs, clean code, good architecture, and above all we are committed to the success of your company.\n' +
            '\n' +
            'We have been designing, building and supporting web applications for almost half a decade. As a reliable web application development company, WebOsmotic Software has earned high reputation, so you can trust us with your largest and most ambitious projects.'
        }, {
            icon: 'construct',
            title: 'Maintenance & Enhancement',
            description: 'Our professional, experienced maintenance and enhancement teams are highly cost-effective and adaptive. WebOsmotic can help maintain your business-critical software applications and ensure that enhancements are planned and deployed per the required. We can analyze the project issues, provide recommended actions and take over the development work from current vendor or team'
        }];

    constructor() {
    }

    managerAccordian(index) {
        this.serviceAccordian[index]['isOpen'] = this.serviceAccordian[index].isOpen && this.serviceAccordian[index].isOpen === 'true' ? 'false' : 'true';
    }
}
