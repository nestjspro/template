import { ApplicationService } from './ApplicationService';
import { Controller } from '@nestjs/common';

@Controller('/')
export class ApplicationController {

    /**
     * asdf
     *
     * @param {ApplicationService} appService asdf
     * @param a
     */
    public constructor(private readonly appService: ApplicationService, public a: number) {

    }

}
