export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=W8fy615tiNsVYy94cY6CC4AqVjvy5tBp&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}

