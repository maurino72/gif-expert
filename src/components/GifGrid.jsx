import { GifItem, LoaderPage } from "./";
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    const { images, isLoading } = useFetchGifs(category);
    console.log(isLoading)
    if (isLoading) {
        return <LoaderPage />
    }
  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
            {images.map((image) => 
                (<GifItem key={image.id} {...image} />)
            )}
        </div>
    </>
  )
}
