export class ProjectModel {
    id;
    title;
    description;
    slug;

    mainVideo;

    detail;
    clientName;
    year;
    thumbnailImage;

    seoTitle;
    seoDescription;
    jumbotron;

    contentSections;


    constructor(id, title, description, slug, detail, clientName, year, thumbnailImage, contentSections,jumbotron, seoTitle, seoDescription) {
        this.title = title;
        this.id = id;
        this.description = description;
        this.detail = detail;
        this.slug = slug;
        // this.mainVideo = mainVideo;
        this.clientName = clientName;
        this.year = year;
        this.thumbnailImage = thumbnailImage;
        this.contentSections = contentSections;
        this.seoTitle = seoTitle;
        this.seoDescription = seoDescription;
        this.jumbotron = jumbotron;
    }
}