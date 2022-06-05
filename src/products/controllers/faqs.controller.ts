import { Controller, Get, Query } from '@nestjs/common';

@Controller('faqs')
export class FaqsController {
	@Get('')
	getProduct(@Query('faqsId') faqsId: string = 'AskQuestions') {
		return `Frequents ${faqsId}`;
	}
}
