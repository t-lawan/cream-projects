export class PageModel {
    id;
    title;
    seoTitle;
    firstColumnText;
    staff;
    selectedClientsAndCollaborators;
    contactText;
    pressText;
    projectThumbnailList;

    constructor(id, title, seoTitle, firstColumnText, staff, selectedClientsAndCollaborators, contactText, pressText, projectThumbnailList) {
        this.id = id;
        this.title = title;
        this.seoTitle = seoTitle;
        this.firstColumnText = firstColumnText;
        this.staff = staff;
        this.selectedClientsAndCollaborators = selectedClientsAndCollaborators;
        this.contactText = contactText;
        this.pressText = pressText;
        this.projectThumbnailList = projectThumbnailList;
    }
}