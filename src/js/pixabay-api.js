export function fetchPhotos(query) {
  const searchParams = new URLSearchParams({
    key: '44727991-bc78e4ccccfc4d25cda89bd33',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log('Error fetching photos:', error));
}

