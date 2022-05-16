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
import { defHttp } from '/@/utils/http/axios';
import { listToTree } from '/@/utils/helper/treeHelper';

enum Api {
  UserPageList = '/system/user/listPage',
  AccountList = '/system/user/getAccountList',
  IsAccountExist = '/system/user/isNameExist',
  setRoleStatus = '/system/user/setRoleStatus',
  addUser = '/system/user/addUser',
  updateUserById = '/system/user/updateById',

  DeptList = '/system/dept/list',
  DeptPageList = '/system/dept/listPage',
  addDept = '/system/dept/add',
  updateDeptById = '/system/dept/updateById',
  DeptListTree = '/system/dept/list',
  GetAllDeptList = '/system/dept/list',

  MenuListTree = '/system/menu/list',
  MenuPageList = '/system/menu/listPage',
  addMenu = '/system/menu/add',
  updateMenuById = '/system/menu/updateById',

  RolePageList = '/system/role/listPage',
  addRole = '/system/role/add',
  updateRoleById = '/system/role/updateById',
  GetAllRoleList = '/system/role/list',

  DictPageList = '/system/dict/listPage',
  addDict = '/system/dict/add',
  updateDictById = '/system/dict/updateById',

  DictItemPageList = '/system/dictItem/listPage',
  addDictItem = '/system/dictItem/add',
  updateDictItemById = '/system/dictItem/updateById',
}
//***********用户
export const getUserPageList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.UserPageList, params });

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const addUser = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.addUser, params });
export const updateUserById = (params?: RoleParams) =>
  defHttp.put<RoleListGetResultModel>({ url: Api.updateUserById, params });

//***********部门
export const getDeptListTree = async (params?: MenuParams) => {
  const list = await defHttp.get<MenuListGetResultModel>({ url: Api.DeptListTree, params });
  const listTree = listToTree(list as any, {
    id: 'id',
    children: 'children',
    pid: 'parentId',
  });
  return Promise.resolve(listTree);
};

export const getAllDeptList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllDeptList, params });

export const getDeptListByPage = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptPageList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const addDept = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.addDept, params });

export const updateDeptById = (params?: RoleParams) =>
  defHttp.put<RoleListGetResultModel>({ url: Api.updateDeptById, params });

//***********菜单
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

//***********角色
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

export const isAccountExist = (username: string) =>
  defHttp.get({ url: Api.IsAccountExist, params: { username } }, { errorMessageMode: 'none' });

//***********字典
export const getDictListPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.DictPageList, params });

export const addDict = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.addDict, params });

export const updateDictById = (params?: RoleParams) =>
  defHttp.put<RoleListGetResultModel>({ url: Api.updateDictById, params });
//***********字典项
export const getDictItemListPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.DictItemPageList, params });

export const addDictItem = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.addDictItem, params });

export const updateDictItemById = (params?: RoleParams) =>
  defHttp.put<RoleListGetResultModel>({ url: Api.updateDictItemById, params });
