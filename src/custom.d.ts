type RecordItem = {//在 TS 里声明类型,也可以写类（构造函数）
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?: Date
}