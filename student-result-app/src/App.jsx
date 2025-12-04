import React, { useState } from 'react'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import StudentDetails from './components/StudentDetails'
import * as studentService from './services/studentService'

export default function App() {
  const [students, setStudents] = useState([])
  const [mode, setMode] = useState('list') // 'list' | 'add' | 'edit' | 'details'
  const [selected, setSelected] = useState(null)

  async function loadStudents() {
    try {
      const data = await studentService.getStudents()
      setStudents(data)
    } catch (err) {
      alert('Failed to load students: ' + err.message)
    }
  }

  function handleAdd() {
    setSelected(null)
    setMode('add')
  }

  function handleEdit(student) {
    setSelected(student)
    setMode('edit')
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this student?')) return
    try {
      await studentService.deleteStudent(id)
      alert('Student deleted. Click "Load Students" to refresh the list.')
    } catch (err) {
      alert('Delete failed: ' + err.message)
    }
  }

  function handleView(student) {
    setSelected(student)
    setMode('details')
  }

  function handleCancel() {
    setMode('list')
  }

  function handleDone() {
    // After add/edit we go back to list view but do NOT auto-reload
    setMode('list')
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Result Management</h1>
      </header>

      <main>
        {mode === 'list' && (
          <StudentList
            students={students}
            onLoad={loadStudents}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        )}

        {mode === 'add' && (
          <StudentForm mode="add" onCancel={handleCancel} onDone={handleDone} />
        )}

        {mode === 'edit' && (
          <StudentForm mode="edit" initialData={selected} onCancel={handleCancel} onDone={handleDone} />
        )}

        {mode === 'details' && (
          <StudentDetails student={selected} onBack={() => setMode('list')} />
        )}
      </main>
    </div>
  )
}
