<template>
  <BasicDrawer v-bind="$attrs" @register="registerDictItemDrawer" title="字典列表" width="700px">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增字典</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <DictItemModal @register="registerModal" @success="handleSuccess" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getDictItemListPage } from '/@/api/system';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';

  import { columns, searchFormSchema } from './role.data';
  import DictItemModal from '/@/views/system/dict/DictItemDrawer/DictItemModal.vue';
  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    name: 'DictItemDrawer',
    components: { DictItemModal, BasicTable, BasicDrawer, TableAction },
    setup() {
      let dictRecord = { id: '' };

      const [registerDictItemDrawer] = useDrawerInner((data) => {
        dictRecord = data.record;
        reload({ searchInfo: { dictId: dictRecord.id } });
      });
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '字典项列表',
        api: getDictItemListPage,
        immediate: false,
        columns,
        formConfig: {
          labelWidth: 70,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 50,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
          record: { dictId: dictRecord.id },
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record: { ...record, dictId: dictRecord.id },
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerModal,
        registerDictItemDrawer,
        registerTable,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
