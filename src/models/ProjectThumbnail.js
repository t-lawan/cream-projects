export class ProjectThumbnailModel {
    id;
    title;
    image;
    project;

    constructor(id, title, image, project) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.project = project;
    }
}