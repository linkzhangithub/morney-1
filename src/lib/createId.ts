let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId() {
    id++;
    // id 存入 localStorage
    window.localStorage.setItem('_idMax', id.toString());
    return id;
}

export default createId;