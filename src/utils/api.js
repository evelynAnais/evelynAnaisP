const JOKES_URL = 'http://localhost:5000/jokes';
const QUOTES_URL = 'http://localhost:5000/quotes';
const PROJECTS_URL = 'http://localhost:5000/projects';


const headers = new Headers();
headers.append('Content-Type', 'application/json');

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status < 200 || response.status > 399) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();

  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function getNote() {
  const url = `${JOKES_URL}`;
  return await fetchJson(url, {});
}