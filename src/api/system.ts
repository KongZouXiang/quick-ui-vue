import {
  AccountListGetResultModel,
  AccountParams,
  DeptListGetResultModel,
  DeptListItem,
  MenuListGetResultModel,
  MenuParams,
  RoleListGetResultModel,
  RolePageListGetResultModel,
  RolePageParams,
  RoleParams,
} from './demo/model/systemModel';
import {defHttp} from '/@/utils/http/axios';
import {listToTree} from '/@/utils/helper/treeHelper';

enum Api {
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/system/setRoleStatus',

  MenuListTree = '/system/menu/list',
  MenuPageList = '/system/menu/listPage',
  addMenu = '/system/menu/add',
  updateMenuById = '/system/menu/updateById',

  RolePageList = '/system/role/listPage',
  addRole = '/system/role/add',
  updateRoleById = '/system/role/updateById',
  GetAllRoleList = '/system/getAllRoleList',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuPageList, params });

export const getMenuListTree = async (params?: MenuParams) => {
  const list = await defHttp.get<MenuListGetResultModel>({ url: Api.MenuListTree, params });
  const listTree = listToTree(list as any, {
    id: 'id',
    children: 'children',
    pid: 'parentId',
  });
  return Promise.resolve(listTree);
};
export const addMenu = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.addMenu, params });
export const updateMenuById = (params?: RoleParams) =>
  defHttp.put<RoleListGetResultModel>({ url: Api.updateMenuById, params });

//
export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const addRole = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.addRole, params });

export const updateRoleById = (params?: RoleParams) =>
  defHttp.put<RoleListGetResultModel>({ url: Api.updateRoleById, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
