<template>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <FormItem fieldName="备注"
      placeholder="在这里输入备注"
      @update:value="onUpdateNotes"
      />
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import { Component, Watch} from 'vue-property-decorator';
  import recordListModel from '@/models/recordListModel';
  import tagListModel from '@/models/tagListModel';

  const recordList = recordListModel.fetch();
  const tagList = tagListModel.fetch();
  
  @Component({
    components: { Tags, FormItem, Types, NumberPad }
    })
  export default class Money extends Vue{
    tags = tagList;
    recordList: RecordItem[] = recordList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }
    
    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord(){
      const record2: RecordItem = recordListModel.clone(this.record);//深拷贝：因为 this.record 传给recordList 时地址不发生改变，所以传进去的值个数改变，但会覆盖之前内容；深拷贝是先把值变成字符串，字符串创建一个新对象（与之前对象属性完全一样）
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save(this.recordList);
    }
  };
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>