import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoadging] = useState(true);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoadging(false);
    }

    useEffect(() => {
        getImages();
    }, [category]);

    return { images, isLoading }
}