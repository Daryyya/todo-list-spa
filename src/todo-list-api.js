import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore/lite";
import { ref as storageRef, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { firebaseDB, firestorage } from "./firebase";


const fetchAllFiles = async () => {
  const ref = storageRef(firestorage, `files/`);
  const { items } = await listAll(ref);

  const unpackedItems = await Promise.all(
    items.map(async (item) => {
      const link = await getDownloadURL(item);
      return { name: item.name, link }
    })
  );

  return unpackedItems.reduce(
    (acc, item) => ({...acc, [item.name]: item.link}),
    {}
    )
}
const uploadFile = async (file, docId) => {
  const ref = storageRef(firestorage, `files/${docId}`)
  await uploadBytes(ref, file)
}

export const fetchAll = async (onReceived, key) => {
  const testCol = collection(firebaseDB, `${key}`);
  const testSnapshot = await getDocs(testCol);
  const list = testSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  
  const files = await fetchAllFiles()
  list.forEach((todo) => {
    todo.file = files[todo.id]
  })

  onReceived(list);
};

export const createTodo = async (data, onReceived, key) => {
  try {
    
    const { project } = data;
    const doc = await addDoc(collection(firebaseDB, `${key}`), {
    //   ...baseTodo,
    //   isDone: false,
    project: project,
    });
    console.log('here')

    // if (file?.name) {
    //   await uploadFile(file, doc.id);
    // }

    fetchAll(onReceived, key)
  } catch {
    console.log('error');
  }
};

export const deleteTodo = async (id, onReceived) => {
  await deleteDoc(doc(firebaseDB, "todo", id));
  fetchAll(onReceived)
}

export const updateTodo = async (id, todo, onReceived) => {
  const todoRef = doc(firebaseDB, "todo", id);
  const { file, ...baseTodo } = todo;

  await updateDoc(todoRef, baseTodo);

  if (file?.name) {
    await uploadFile(file, id);
  }

  fetchAll(onReceived)
}