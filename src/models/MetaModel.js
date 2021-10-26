export class MetaModel {
    id;
    seoTitle;
    seoDescription;
    seoImage;
    landingPageUrl;

    constructor(id, seoTitle, seoDescription, seoImage, landingPageUrl) {
        this.id = id;
        this.seoTitle = seoTitle;
        this.seoDescription = seoDescription;
        this.seoImage = seoImage;
        this.landingPageUrl = landingPageUrl;
    }
}