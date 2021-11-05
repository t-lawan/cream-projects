export class PageModel {
    id;
    title;
    seoTitle;
    firstColumnText;
    staff;
    selectedClientsAndCollaborators;
    contactText;
    pressText;
    projectList;

    constructor(id, title, seoTitle, firstColumnText, staff, selectedClientsAndCollaborators, contactText, pressText, projectList) {
        this.id = id;
        this.title = title;
        this.seoTitle = seoTitle;
        this.firstColumnText = firstColumnText;
        this.staff = staff;
        this.selectedClientsAndCollaborators = selectedClientsAndCollaborators;
        this.contactText = contactText;
        this.pressText = pressText;
        this.projectList = projectList;
    }
}