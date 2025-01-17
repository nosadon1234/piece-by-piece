"use client";
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>   
    <p>조각조각소리그림책</p>
    <audio className={styles.firstAudio} controls><source src="/audio/비디오노이즈.wav" type="audio/mpeg"/></audio>
    <Image className={styles.firstImage} src="/image/piecebypiece.webp" alt="조각조각'갯벌'점묘이미지" width={400} height={400}/>
    </div>
  );
}