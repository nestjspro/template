import { PermissionCreate } from '@nestjs.pro/rbac/dist/Permissions/PermissionCreate';
import { RoleCreate }       from '@nestjs.pro/rbac/dist/Roles/RoleCreate';
import { RBAC_TYPE }        from '@nestjs.pro/rbac/dist/types/RBACTypes';

export const RBAC_PERMISSIONS_PAGES: Array<PermissionCreate> = [

    {

        name: 'pages.search',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'pages.get',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'pages.create',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'pages.update',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }, {

        name: 'pages.delete',
        description: '',
        type: RBAC_TYPE.SYSTEM

    }

];

export const RBAC_DEFAULT_ROLES: Array<RoleCreate> = [

    {

        name: 'pages.admin',
        description: 'Complete control over pages & their settings.',
        permissions: RBAC_PERMISSIONS_PAGES,
        type: RBAC_TYPE.SYSTEM

    }

];
