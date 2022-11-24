import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { TopLevelCategory, TopPageModel } from './top-page.model';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { addDays } from 'date-fns';
import { Types } from 'mongoose';

@Injectable()
export class TopPageService {
	constructor(@InjectModel(TopPageModel) private readonly topPageModel: ModelType<TopPageModel>) {}

	async create(dto: CreateTopPageDto): Promise<DocumentType<TopPageModel>> {
		return this.topPageModel.create(dto);
	}

	async findById(id: string): Promise<DocumentType<TopPageModel> | null> {
		return this.topPageModel.findById(id).exec();
	}

	async findByAlias(alias: string): Promise<DocumentType<TopPageModel> | null> {
		return this.topPageModel.findOne({ alias }).exec();
	}

	async findByCategory(
		firstCategory: TopLevelCategory,
	): Promise<DocumentType<Pick<TopPageModel, 'alias' | 'secondCategory' | 'title'>>[]> {
		return this.topPageModel.find({ firstCategory }, { alias: 1, secondCategory: 1, title: 1 }).exec();
	}

	async findByText(text: string): Promise<DocumentType<TopPageModel>[]> {
		return this.topPageModel.find({ $text: { $search: text, $caseSensitive: false } }).exec();
	}

	async deleteById(id: string): Promise<DocumentType<TopPageModel> | null> {
		return this.topPageModel.findByIdAndDelete(id).exec();
	}

	async updateById(id: string | Types.ObjectId, dto: CreateTopPageDto): Promise<DocumentType<TopPageModel> | null> {
		return this.topPageModel.findByIdAndUpdate(id, dto, { new: true, useFindAndModify: false }).exec();
	}

	async findForHhUpdate(date: Date): Promise<DocumentType<TopPageModel>[]> {
		return this.topPageModel
			.find({
				firstCategory: 0,
				$or: [{ 'hh.updatedAt': { $lt: addDays(date, -1) } }, { 'hh.updatedAt': { $exists: false } }],
			})
			.exec();
	}
}
