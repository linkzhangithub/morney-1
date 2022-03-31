<template>
    <Layout class-prefix="layout">
      {{record}}
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <Notes @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import { Component, Watch} from 'vue-property-decorator';

  type Record = {//在 TS 里声明类型
    tags: string[]
    notes: string
    type: string
    amount: number
  }
  
  @Component({
    components: { Tags, Notes, Types, NumberPad }
    })
  export default class Money extends Vue{
    tags = ['衣', '食', '住', '行', '娱乐'];
    recordList: Record[] = [];
    record: Record = {
      tags: [], notes: '', type: '-', amount: 0
    };

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }
    
    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord(){
      const record2 = JSON.parse(JSON.stringify(this.record));//深拷贝：因为 this.record 传给recordList 时地址不发生改变，所以传进去的值个数改变，但会覆盖之前内容；深拷贝是先把值变成字符串，字符串创建一个新对象（与之前对象属性完全一样）
      this.recordList.push(record2);
      console.log(this.recordList);
    }

    @Watch('recordList')
    onRecordListChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }
  };
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>