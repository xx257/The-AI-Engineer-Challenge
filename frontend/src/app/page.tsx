import MatrixRain from "@/components/MatrixRain";
import ChatTerminal from "@/components/ChatTerminal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <MatrixRain />
      <ChatTerminal />
    </main>
  );
}
