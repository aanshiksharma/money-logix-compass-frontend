export function getSessionId() {
  let id = localStorage.getItem("nm_session");

  if (!id) {
    id =
      "sess_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("nm_session", id);
  }
  return id;
}

export function resetSessionId() {
  localStorage.removeItem("nm_session");
}

export function setSessionId(id?: string) {
  if (id) localStorage.setItem("nm_session", id);
}
