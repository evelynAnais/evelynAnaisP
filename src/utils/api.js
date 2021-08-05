const JOKES_URL = 'https://evelyn-portfolio-backend.herokuapp.com/jokes';
const QUOTES_URL = 'https://evelyn-portfolio-backend.herokuapp.com/quotes';
const PROJECTS_URL = 'https://evelyn-portfolio-backend.herokuapp.com/projects';


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

export async function getJoke() {
  const url = `${JOKES_URL}`;
  return await fetchJson(url, {});
}

export async function getQuote() {
  const url = `${QUOTES_URL}`;
  return await fetchJson(url, {});
}

export async function getProject() {
  const url = `${PROJECTS_URL}`;
  return await fetchJson(url, {});
}