import { Server } from '@nestjs.pro/common/dist/server/Server';
import { ApplicationModule } from './ApplicationModule';
import { ServerConfig } from '@nestjs.pro/common/dist/server/ServerConfig';

Server.bootstrap(new ServerConfig({

    name: 'Test App',
    port: 8080,
    module: ApplicationModule,
    cors: {

        origins: [ 'http://localhost:4200' ]

    },
    swagger: {

        path: 'swagger',
        title: 'nestjs.pro template application',
        description: 'nestjs.pro template application',
        version: '0.0.1',
        tags: [],
        contactName: 'John Doe',
        contactEmail: 'support@nestjs.pro',
        contactUrl: 'https://nestjs.pro',
        docsDescription: 'docs',
        docsUrl: 'https://nestjs.pro',
        serverUrls: [ 'http://localhost:8080' ]

    }

}));
