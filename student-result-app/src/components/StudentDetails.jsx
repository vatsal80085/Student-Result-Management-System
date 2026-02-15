import React from 'react'

export default function StudentDetails({ student, onBack }) {
  if (!student) return null

  return (
    <div className="card">
      <h2 style={{marginTop:0}}>Student Details</h2>
      <div className="details-row"><strong>ID:</strong> {student.id}</div>
      <div className="details-row"><strong>Name:</strong> {student.name}</div>
      <div className="details-row"><strong>Section:</strong> {student.section}</div>
      <div className="details-row"><strong>Marks:</strong> {student.marks}</div>
      <div className="details-row"><strong>Grade:</strong> {student.grade}</div>
      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={onBack}>Back</button>
      </div>
    </div>
  )
}
