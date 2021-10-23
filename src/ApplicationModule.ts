import { Module } from '@nestjs/common';
import { ApplicationService } from './ApplicationService';
import { ApplicationController } from './ApplicationController';

@Module({

    providers: [

        ApplicationService

    ],

    controllers: [

        ApplicationController

    ]

})
export class ApplicationModule {

}
