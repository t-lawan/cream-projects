import { ProjectModel } from '../models/ProjectModel';
import { PageModel } from '../models/PageModel';
import { MetaModel } from '../models/MetaModel';

export class Convert {

	static toMetaModel = (contentfulModel) => {
		return new MetaModel(
			contentfulModel.contentful_id,
			contentfulModel.seoTitle,
			contentfulModel.seoDescription ? contentfulModel.seoDescription.seoDescription : '',
			contentfulModel.seoImage && contentfulModel.seoImage.file ? contentfulModel.seoImage.file.url : null,
			contentfulModel.landingPageVideo && contentfulModel.landingPageVideo.file ? contentfulModel.landingPageVideo.file.url : null,
		)
	}
	static toProjectModel = (contentfulModel) => {
		return new ProjectModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.description ? contentfulModel.description.raw : '',
			contentfulModel.slug,
			contentfulModel.detail ? contentfulModel.detail.detail : '',
			contentfulModel.clientName,
			contentfulModel.year,
			contentfulModel.thumbnailImage,
			contentfulModel.mainVideo,
			contentfulModel.contentSections,
			contentfulModel.seoTitle,
			contentfulModel.seoDescription ? contentfulModel.seoDescription.seoDescription : ''
		);
	};

	static toPageModel = (contentfulModel) => {
		return new PageModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.seoTitle,
			contentfulModel.firstColumnText ? contentfulModel.firstColumnText.raw : '',
			contentfulModel.staff,
			contentfulModel.selectedClientsAndCollaborators,
			contentfulModel.contactText ? contentfulModel.contactText.raw : '',	
		)
	}

	static toModelArray = (query, modelConverter) => {
		const modelArray = [];
		query.edges.forEach((contentfulModel) => {
			let model = modelConverter(contentfulModel.node);
			modelArray.push(model);
		});
		return modelArray;
	};
}
