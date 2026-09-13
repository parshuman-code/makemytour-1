/**
 * userSync.js
 * Utility helpers for syncing user activity (searches, saves, bookings)
 * to the backend and keeping localStorage in sync.
 */

export async function syncUserFromBackend(user, setUser) {
  if (!user?.email) return;
  try {
    const res = await fetch(`/api/user/email?email=${encodeURIComponent(user.email)}`);
    const freshUser = await res.json();
    if (freshUser && freshUser._id) {
      setUser(freshUser);
      localStorage.setItem('mmt_user', JSON.stringify(freshUser));
    }
  } catch { /* Backend offline - silently ignore */ }
}

export async function saveSearchToAccount(user, query, type, details = {}) {
  if (!user) return;
  try {
    const stored = JSON.parse(localStorage.getItem('mmt_user') || '{}');
    const newSearch = { query, type, details, date: new Date().toISOString() };
    stored.recentSearches = [newSearch, ...(stored.recentSearches || [])].slice(0, 10);
    localStorage.setItem('mmt_user', JSON.stringify(stored));
  } catch { /* ignore */ }
  try {
    await fetch('/api/user/save-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user._id, email: user.email, query, type, details })
    });
  } catch { /* Backend offline */ }
}

export async function toggleSavedItem(user, setUser, itemId, type, title, price, image) {
  if (!user) return { isSaved: false };
  let isSaved = false;
  try {
    const stored = JSON.parse(localStorage.getItem('mmt_user') || '{}');
    const existing = (stored.savedItems || []).findIndex(s => s.itemId === itemId && s.type === type);
    if (existing !== -1) {
      stored.savedItems.splice(existing, 1);
      isSaved = false;
    } else {
      stored.savedItems = [{ itemId, type, title, price, image, date: new Date().toISOString() }, ...(stored.savedItems || [])];
      isSaved = true;
    }
    localStorage.setItem('mmt_user', JSON.stringify(stored));
    setUser(prev => ({ ...prev, savedItems: stored.savedItems }));
  } catch { /* ignore */ }
  try {
    const res = await fetch('/api/user/toggle-save-item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user._id, email: user.email, itemId, type, title, price, image })
    });
    const data = await res.json();
    if (typeof data.isSaved === 'boolean') isSaved = data.isSaved;
    if (data.savedItems) {
      const stored = JSON.parse(localStorage.getItem('mmt_user') || '{}');
      stored.savedItems = data.savedItems;
      localStorage.setItem('mmt_user', JSON.stringify(stored));
      setUser(prev => ({ ...prev, savedItems: data.savedItems }));
    }
  } catch { /* Backend offline */ }
  return { isSaved };
}

export function isItemSaved(user, itemId, type) {
  if (!user?.savedItems) return false;
  return user.savedItems.some(s => s.itemId === itemId && s.type === type);
}
