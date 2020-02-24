import { RBACModule }         from '@nestjs.pro/rbac/dist/RBACModule';
import { Module }             from '@nestjs/common';
import { RBAC_DEFAULT_ROLES } from './_lib/RBAC';

@Module({

    imports: [

        RBACModule.forRoot({

            initializeModuleDefaults: false,
            roles: RBAC_DEFAULT_ROLES

        }),

    ]

})
export class AppModule {

}
