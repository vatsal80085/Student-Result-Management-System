import React, { useState } from 'react'
import * as studentService from '../services/studentService'

export default function StudentForm({ mode = 'add', initialData = {}, onCancel, onDone }) {
  const [name, setName] = useState(initialData.name || '')
  const [section, setSection] = useState(initialData.section || '')
  const [marks, setMarks] = useState(initialData.marks || '')
  const [grade, setGrade] = useState(initialData.grade || '')

  async function handleSubmit(e) {
    e.preventDefault()
    const payload = { name, section, marks, grade }
    try {
      if (mode === 'add') {
        await studentService.addStudent(payload)
        alert('Student added. Click "Load Students" to refresh the list.')
      } else {
        await studentService.updateStudent(initialData.id, payload)
        alert('Student updated. Click "Load Students" to refresh the list.')
      }
      onDone()
    } catch (err) {
      alert('Operation failed: ' + err.message)
    }
  }

  return (
    <div className="card">
      <h2 style={{marginTop:0}}>{mode === 'add' ? 'Add Student' : 'Edit Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-field">
            <label>Section</label>
            <input value={section} onChange={(e) => setSection(e.target.value)} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Marks</label>
            <input value={marks} onChange={(e) => setMarks(e.target.value)} required />
          </div>
          <div className="form-field">
            <label>Grade</label>
            <input value={grade} onChange={(e) => setGrade(e.target.value)} required />
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit">Save</button>
          <button className="btn" type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
