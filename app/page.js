import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <Link href="/Form">
          <button>NoteTaker</button>
        </Link>
        <Link href="/notes">
          <button>Go to notes</button>
        </Link>
        <Link href="/AstronomicPic">
          <button>NasaPic</button>
        </Link>
        <Link href="/MarsRover">
          <button>Mars Rover Pic</button>
        </Link>
        <Link href="/Blogs">
          <button>Blog Post</button>
        </Link>
        <Link href="/EpicImage">
          <button>NASA Epic Images</button>
        </Link>
      </div>
    </>
  );
}
