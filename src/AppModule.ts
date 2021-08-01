import { Module } from '@nestjs/common';
import { AppService } from './AppService';
import { AppController } from './AppController';

@Module({

    providers: [

        AppService

    ],

    controllers: [

        AppController

    ]

})
export class AppModule {

}
