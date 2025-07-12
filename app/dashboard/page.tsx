
'use client';
import { useEffect, useState } from 'react';

type Entry = {
  id: string;
  title: string;
  content?: string;
};

export default function Dashboard() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formState, setFormState] = useState({ title: '', content: '' });

  useEffect(() => {
    fetch('/api/entries')
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  const handleEdit = (entry: Entry) => {
    setEditingId(entry.id);
    setFormState({ title: entry.title, content: entry.content || '' });
  };

  const handleSave = async (id: string) => {
    await fetch('/api/entries', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...formState }),
    });
    setEditingId(null);
    location.reload();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">📋 Editable Entries</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Content</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id} className="border-t">
              <td className="p-2 border">
                {editingId === entry.id ? (
                  <input name="title" value={formState.title} onChange={handleChange} />
                ) : (
                  entry.title
                )}
              </td>
              <td className="p-2 border">
                {editingId === entry.id ? (
                  <input name="content" value={formState.content} onChange={handleChange} />
                ) : (
                  entry.content
                )}
              </td>
              <td className="p-2 border">
                {editingId === entry.id ? (
                  <button className="text-blue-600" onClick={() => handleSave(entry.id)}>Save</button>
                ) : (
                  <button className="text-blue-600" onClick={() => handleEdit(entry)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
