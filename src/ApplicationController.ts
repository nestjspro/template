import { Controller } from '@nestjs/common';
import { ApplicationService } from './ApplicationService';

@Controller('/')
export class ApplicationController {

    public constructor(private readonly appService: ApplicationService) {

    }

}
