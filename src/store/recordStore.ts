import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.recordList;
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
    },
    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);//深拷贝：因为 this.record 传给recordList 时地址不发生改变，所以传进去的值个数改变，但会覆盖之前内容；深拷贝是先把值变成字符串，字符串创建一个新对象（与之前对象属性完全一样）
        record2.createdAt = new Date().toISOString();
        this.recordList && this.recordList.push(record2);//可选链语法 recordList?.push
        recordStore.saveRecords();
    },
};

recordStore.fetchRecords();

export default recordStore;