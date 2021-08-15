import firebase from '~/plugins/firebase'
// 初期値のインポート
import { firestoreAction } from 'vuexfire'

const db =firebase.firestore()
const todosRef = db.collection('todos')
// collectionはtodosを使うという設定

export const state = () => ({
 todos:[],
})

export const actions ={
// 初期化
 init: firestoreAction(({ bindFirestoreRef }) => {
  bindFirestoreRef('todos',todosRef)
 }),
// 追加
 add: firestoreAction((context, name) => {
  if(name.trim()){
   // 空欄かどうかを確認
   todosRef.add({
    name: name,
    done: false,
    status:1,
    created: firebase.firestore.FieldValue.serverTimestamp()
    // firestoreから現在時刻の取得（ローカルサーバーの時刻はズレる恐れがあるので）
   })
  }
 }),
// 削除
remove: firestoreAction((context, id) => {
 todosRef.doc(id).delete()
}),
// チェックボックスの管理
toggle: firestoreAction((context, todo) => {
 todosRef.doc(todo.id).update({
  done: !todo.done
 })
}),

// うまく行ってない
changeStatus: firestoreAction((context, todo) => {
 todosRef.doc(todo.id).update({
  status: todo.status++
 }) 
}),
}

export const getters = {
 orderdTodos: state => {
  return _.sortBy(state.todos, 'created').reverse()
  // reverseを入れると順番を逆にできる
 }
}