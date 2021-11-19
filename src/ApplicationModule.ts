import { ApplicationController } from './ApplicationController';
import { ApplicationService } from './ApplicationService';
import { Module } from '@nestjs/common';

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
