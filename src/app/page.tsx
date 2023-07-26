"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Typewriter from "typewriter-effect";

function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  async function CreatingImage(): Promise<any> {
    setLoading(true);

    try {
      const response = await fetch(`/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `${prompt}`,
        }),
      });
      const data = await response.json();
      setImage(data.url);
      setPrompt("");
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.subMain}>
          <h1 className={styles.app_name}>
            <Typewriter
              onInit={(typeWriter) => {
                typeWriter
                  .typeString("PictoGen")
                  .callFunction(() => {
                    console.log("");
                  })
                  .start();
              }}
            />
          </h1>
          <div className={styles.boxInput}>
            <input
              className={styles.subBoxInput}
              type="text"
              placeholder="Enter your prompt"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPrompt(event.target.value)
              }
              value={prompt}
            />
          </div>

          <div className={styles.boxButton}>
            <button onClick={() => CreatingImage()}>
              {loading ? "Loading..." : "Create image"}
            </button>
          </div>

          <div className={styles.boxImageGenerated}>
            {image && (
              <Image className={styles.imgResult} src={image} alt="img" />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
