type RootState = {
    recordList: RecordItem[],
    createRecordError: Error | null,
    createTagError: Error | null,
    tagList: Tag[],
    currentTag?: Tag
}
type RecordItem = {//在 TS 里声明类型,也可以写类（构造函数）
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?: string
}

type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';//联合类型(类似枚举，不属于七个基本数据类型)
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean
    save: () => void;
}

interface Window {
}