import { Controller, Get } from '@nestjs/common';
import { AppService } from './AppService';

@Controller('/')
export class AppController {

    public constructor(private readonly appService: AppService) {

    }

    @Get('/test')
    public test(): string {

        return this.appService.test();

    }

}
