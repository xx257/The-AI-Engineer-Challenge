"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./ChatTerminal.module.css";

type Role = "system" | "user" | "coach";

interface Message {
  id: string;
  role: Role;
  text: string;
}

const BOOT_LINES = [
  "MATRIX MENTAL COACH v1.0 — uplink established",
  "system: You are connected to a supportive mental coach.",
  "system: Type your message and press ENTER to transmit.",
  "system: ─────────────────────────────────────────────",
];

const PROMPT = "neo@matrix:~$ ";
const SYSTEM_PREFIX = "// ";
const CHAT_ENDPOINT = "/api/chat";

export default function ChatTerminal() {
  const [messages, setMessages] = useState<Message[]>(() =>
    BOOT_LINES.map((text, i) => ({
      id: `boot-${i}`,
      role: "system" as const,
      text,
    })),
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    setInput("");

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = (await res.json()) as { reply?: string; detail?: string };

      if (!res.ok) {
        throw new Error(data.detail ?? `Request failed (${res.status})`);
      }

      const reply = data.reply ?? "(no response)";
      setMessages((prev) => [
        ...prev,
        { id: `coach-${Date.now()}`, role: "coach", text: reply },
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Connection lost.";
      setError(msg);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "system",
          text: `[ERROR] ${msg}`,
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.title}>MATRIX // MENTAL_COACH</span>
        <span className={styles.status}>
          {loading ? "TRANSMITTING..." : "ONLINE"}
        </span>
      </header>

      <div
        ref={logRef}
        className={styles.log}
        role="log"
        aria-live="polite"
        aria-label="Chat transcript"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${styles.line} ${styles[m.role]}`}
          >
            {m.role === "user" && (
              <span className={styles.prefix}>{PROMPT}</span>
            )}
            {m.role === "coach" && (
              <span className={styles.prefix}>coach@matrix:&gt; </span>
            )}
            {m.role === "system" && (
              <span className={styles.prefix}>{SYSTEM_PREFIX}</span>
            )}
            <span className={styles.text}>{m.text}</span>
          </div>
        ))}
        {loading && (
          <div className={`${styles.line} ${styles.system}`}>
            <span className={styles.prefix}>{SYSTEM_PREFIX}</span>
            <span className={styles.blink}>decrypting response_</span>
          </div>
        )}
      </div>

      {error && (
        <p className={styles.errorBanner} role="alert">
          {error}
        </p>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="matrix-input" className={styles.visuallyHidden}>
          Message
        </label>
        <span className={styles.promptLabel} aria-hidden="true">
          {PROMPT}
        </span>
        <input
          id="matrix-input"
          ref={inputRef}
          type="text"
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter transmission..."
          disabled={loading}
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          className={styles.sendBtn}
          disabled={loading || !input.trim()}
        >
          TX
        </button>
      </form>
    </div>
  );
}
