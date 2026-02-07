import { db } from "../config/firebase";
import { collection, getDocs, getDoc, addDoc, setDoc, updateDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";

const studentsCol = collection(db, "students");

const getAllStudents = async () => {
  const querySnapshot = await getDocs(studentsCol);
  return querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

const getStudentById = async (id) => {
  const ref = doc(db, "students", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

const subscribeStudents = (callback) => {
  return onSnapshot(studentsCol, (snapshot) => {
    const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(data);
  });
};

const addNewStudent = async (student) => {
  const docRef = await addDoc(studentsCol, student);
  return { id: docRef.id, ...student };
};

const setNewStudentWithId = async (id, student) => {
  const ref = doc(db, "students", id);
  await setDoc(ref, student); 
  return { id, ...student };
};

const updateStudent = async (id, updates) => {
  const ref = doc(db, "students", id);
  await updateDoc(ref, updates);
  return { id, ...updates };
};

const mergeUpdateStudent = async (id, updates) => {
  const ref = doc(db, "students", id);
  await setDoc(ref, updates, { merge: true });
  return { id, ...updates };
};

const deleteStudent = async (id) => {
  const ref = doc(db, "students", id);
  await deleteDoc(ref);
  return id;
};

export { getAllStudents, getStudentById, subscribeStudents, addNewStudent, setNewStudentWithId, updateStudent, mergeUpdateStudent, deleteStudent};