export default async function AstronomicPic() {
  const data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=OlzCH4LIbWzf0IXVVqiLUqi51gsGHd0scdwfKhS3"
  );
  const pic = await data.json();

  return (
    <>
      <h1>Astronomical Picture of the day ...</h1>
      <img src={pic.url} alt="astronomical Pic" />
      <h2>{pic.title}</h2>
      <p>{pic.explanation}</p>
    </>
  );
}
