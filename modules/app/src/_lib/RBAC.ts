import { PermissionCreate } from '@nestjs.pro/rbac/dist/Permissions/PermissionCreate';
import { RoleCreate }       from '@nestjs.pro/rbac/dist/Roles/RoleCreate';
import { RBAC_TYPE }        from '@nestjs.pro/rbac/dist/types/RBACTypes';

export const RBAC_PERMISSIONS_APP: Array<PermissionCreate> = [

    {

        name: 'app.search',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'app.get',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'app.create',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'app.update',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'app.delete',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }

];

export const RBAC_DEFAULT_ROLES: Array<RoleCreate> = [

    {

        name: 'app.admin',
        description: 'Complete control over the application & settings.',
        permissions: RBAC_PERMISSIONS_APP,
        type: RBAC_TYPE.SYSTEM

    }

];
