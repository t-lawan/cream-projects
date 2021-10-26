export class PageModel {
    id;
    title;
    seoTitle;
    firstColumnText;
    staff;
    selectedClientsAndCollaborators;
    contactText;


    constructor(id, title, seoTitle, firstColumnText, staff, selectedClientsAndCollaborators, contactText) {
        this.id = id;
        this.title = title;
        this.seoTitle = seoTitle;
        this.firstColumnText = firstColumnText;
        this.staff = staff;
        this.selectedClientsAndCollaborators = selectedClientsAndCollaborators;
        this.contactText = contactText;
    }
}