import { ConfigService } from '@nestjs/config';
import { TELEGRAM_TOKEN_FIND_ERROR } from 'src/telegram/telegram.constants';
import { ITelegramOptions } from 'src/telegram/telegram.interface';

export const getTelegramConfig = (configService: ConfigService): ITelegramOptions => {
	const token = configService.get('TELEGRAM_TOKEN');
	if (!token) {
		throw new Error(TELEGRAM_TOKEN_FIND_ERROR);
	}

	return {
		token,
		chatId: configService.get('CHAT_ID') ?? '',
	};
};
