export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Vyq9F0AUyo3DwTRCn9H0fWJFuWGUKzd9&q=${category}&limit=20`;

    const resp = await fetch(url);

    const {data} = await resp.json();
    
    const gifs = data.map((image) => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}