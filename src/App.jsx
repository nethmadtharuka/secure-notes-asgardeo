import { useState, useEffect } from 'react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  User,
} from '@asgardeo/react'
import './App.css'

function NotesApp() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('secure-notes')
    return saved ? JSON.parse(saved) : []
  })
  const [draft, setDraft] = useState('')

  useEffect(() => {
    localStorage.setItem('secure-notes', JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    if (!draft.trim()) return
    setNotes([...notes, { id: Date.now(), text: draft.trim() }])
    setDraft('')
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id))
  }

  return (
    <div className="notes-container">
      <div className="notes-input-row">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addNote()}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add</button>
      </div>

      <ul className="notes-list">
        {notes.length === 0 && <p className="empty-state">No notes yet.</p>}
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.text}</span>
            <button onClick={() => deleteNote(note.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>🔒 Secure Notes</h1>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </header>

      <SignedOut>
        <div className="signin-gate">
          <p>Please sign in with Asgardeo to view and manage your notes.</p>
          <SignInButton />
        </div>
      </SignedOut>

      <SignedIn>
        <User>
          {(user) => (
            <p className="welcome-msg">
              Welcome, {user?.username || user?.displayName || 'there'} 👋
            </p>
          )}
        </User>
        <NotesApp />
      </SignedIn>
    </div>
  )
}

export default App