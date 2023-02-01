import Slides from "./Slides";
import slideArray from "../JSON-Data/slideArray.json"

export default function ImageSlider() {

    return (
        <Slides slideArray={slideArray} />
    )
}