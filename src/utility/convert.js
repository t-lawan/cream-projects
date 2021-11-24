import { ProjectModel } from '../models/ProjectModel';
import { PageModel } from '../models/PageModel';
import { MetaModel } from '../models/MetaModel';
import { ProjectThumbnailModel } from '../models/ProjectThumbnail';

export class Convert {

	static toMetaModel = (contentfulModel) => {
		return new MetaModel(
			contentfulModel.contentful_id,
			contentfulModel.seoTitle,
			contentfulModel.seoDescription ? contentfulModel.seoDescription.seoDescription : '',
			contentfulModel.seoImage && contentfulModel.seoImage.file ? contentfulModel.seoImage.file.url : null,
			contentfulModel.landingPageUrl,
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
			contentfulModel.mainVideoUrl,
			contentfulModel.contentSections,
			contentfulModel.seoTitle,
			contentfulModel.seoDescription ? contentfulModel.seoDescription.seoDescription : ''
		);
	};

	static toProjectThumbnail = (contentfulModel) => {

		let project = Convert.toProjectModel(contentfulModel.project)
		return new ProjectThumbnailModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.image,
			project
		)
	}

	static toPageModel = (contentfulModel) => {
		let projectThumbnailList = [];


		if(contentfulModel.projectThumbnails){
			contentfulModel.projectThumbnails.forEach((thumbnail) => {
				projectThumbnailList.push(Convert.toProjectThumbnail(thumbnail))
			})
		}
		return new PageModel(
			contentfulModel.contentful_id,
			contentfulModel.title,
			contentfulModel.seoTitle,
			contentfulModel.firstColumnText ? contentfulModel.firstColumnText.raw : '',
			contentfulModel.staff ? contentfulModel.staff.raw : '',
			contentfulModel.selectedClientsAndCollaborators ? contentfulModel.selectedClientsAndCollaborators.raw : '',
			contentfulModel.contactText ? contentfulModel.contactText.raw : '',	
			contentfulModel.pressText ? contentfulModel.pressText.raw : '',	
			projectThumbnailList
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
