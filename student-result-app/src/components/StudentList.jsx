import React from 'react'

export default function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2 style={{margin:0}}>Students</h2>
        <div className="toolbar">
          <button className="btn" onClick={onLoad}>Load Students</button>
          <button className="btn btn-primary" onClick={onAdd}>Add Student</button>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="empty">No students loaded. Click "Load Students".</div>
      ) : (
        <div style={{overflowX:'auto'}}>
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Section</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.section}</td>
                  <td>{s.marks}</td>
                  <td>{s.grade}</td>
                  <td>
                    <button className="btn" onClick={() => onEdit(s)}>Edit</button>{' '}
                    <button className="btn btn-danger" onClick={() => onDelete(s.id)}>Delete</button>{' '}
                    <button className="btn" onClick={() => onView(s)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
