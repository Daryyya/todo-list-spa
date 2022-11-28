import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
// import { ref as storageRef, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { firebaseDB, firestorage } from "./firebase";

export const fetchAll = async (onReceived) => {
  const todoCollection = collection(firebaseDB, "todo");
  const todoSnapshot = await getDocs(todoCollection);
  const list = todoSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  // const files = await fetchAllFiles()
  // list.forEach((todo) => {
  //   todo.file = files[todo.id]
  // })

  onReceived(list);
};

export const createTodo = async (todo, onReceived) => {
  try {
    const { ...baseTodo } = todo;
    //   const { file, ...baseTodo } = todo;
    const doc = await addDoc(collection(firebaseDB, "todo"), {
      ...baseTodo,
      tasks: [{status: 'Queue', id: 1, task: []}, {status: 'Development', id: 2, task: []}, {status: 'Done', id: 3, task: []}],
    });

    //   if (file?.name) {
    //     await uploadFile(file, doc.id);
    //   }

    fetchAll(onReceived);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteTodo = async (id, onReceived) => {
  await deleteDoc(doc(firebaseDB, "todo", id));
  fetchAll(onReceived);
};

export const updateTodo = async (id, todo, onReceived) => {

  console.log(todo)
 
  const todoRef = doc(firebaseDB, "todo", id);

  const { ...baseTodo } = todo;
  // const { file, ...baseTodo } = todo;
  await updateDoc(todoRef, baseTodo);

//   if (file?.name) {
//     await uploadFile(file, id);
//   }

  fetchAll(onReceived);
};
