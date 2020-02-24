import { Server }    from '@nestjs.pro/common/dist/server/Server';
import { AppModule } from './AppModule';

const serverUrls = [];

//
// Public/production URL for the api
//
serverUrls.push('https://api.nestjs.pro');


//
// Used for local development
//
if (Server.getEnvironment() === 'local') {

    serverUrls.push('http://localhost:8080');

}

Server.bootstrap(AppModule, 'app', Number(process.env.PORT) || 8080, {

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
    serverUrls

}, []);
