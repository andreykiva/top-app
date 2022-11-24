import { HttpModule, Module } from '@nestjs/common';
import { HhService } from './hh.service';

@Module({
	providers: [HhService],
	imports: [HttpModule],
	exports: [HhService],
})
export class HhModule {}
