import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '编码',
    dataIndex: 'code',
    width: 180,
  },
  {
    title: '描述',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '角色名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'code',
    label: '编号',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'code',
    label: '编码',
    required: true,
    component: 'Input',
  },
  {
    label: '描述',
    field: 'remark',
    component: 'InputTextArea',
    colProps: { span: 24 },
  },
];
