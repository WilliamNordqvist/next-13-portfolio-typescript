"use client";

import { Analytics } from "@/services/analytics";
import axios from "axios";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Title } from "../title/title";

type Conversation = {
  role: "user" | "assistant";
  content: string;
};

export const Chat = () => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const [inputQuestion, setInputQuestion] = useState("");

  const ask = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputQuestion === "") return;

      setConversation([
        ...conversation,
        {
          role: "user",
          content: inputQuestion,
        },
        {
          role: "assistant",
          content: "...",
        },
      ]);

      setInputQuestion("");

      const {
        data: { answerer },
      } = await axios.post("/api/chat", {
        data: {
          conversation: [
            ...conversation,
            {
              role: "assistant",
              content: inputQuestion,
            },
          ],
        },
      });

      setConversation([
        ...conversation,
        {
          role: "user",
          content: inputQuestion,
        },
        {
          role: "assistant",
          content: answerer,
        },
      ]);
    },
    [conversation, inputQuestion]
  );

  useEffect(() => {
    const chat_El = document.getElementById("chat-container");
    const lastConversation = conversation.at(-1);
    if (lastConversation?.content === "..." && chat_El) {
      chat_El.scrollTop = chat_El.scrollHeight;
    }

    if (
      lastConversation?.content !== "..." &&
      lastConversation?.role === "assistant" &&
      chat_El
    ) {
      chat_El.scrollTop = chat_El.scrollHeight;
    }
  }, [conversation]);

  return (
    <div className="w-full h-screen sm:w-2/3 my-20">
      <Title> My Assistant</Title>
      <div className="bg-[#111821] border border-white text-white rounded-lg shadow-xl overflow-hidden">
        <div className="h-96 overflow-auto p-3 break-words" id="chat-container">
          <p className="mb-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-lime-800 inline-block p-2 rounded-xl overflow-hidden break-word mr-10 max-w-lg shadow-xl"
            >
              Hi how can I help you today?
            </motion.span>
          </p>
          {conversation.map((i, index) => (
            <div className="" key={i.role + index}>
              {i.role === "user" ? (
                <p className="text-right mb-2">
                  <span className="bg-blue-800 inline-block p-2 rounded-xl overflow-hidden break-all ml-10 max-w-lg shadow-xl">
                    {i.content}
                  </span>
                </p>
              ) : (
                <p className="mb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-lime-800 inline-block p-2 rounded-xl overflow-hidden break-word mr-10 max-w-lg shadow-xl"
                  >
                    {i.content}
                  </motion.span>
                </p>
              )}
            </div>
          ))}
        </div>

        <form className="w-full h-10 flex border-top border-t-2" onSubmit={ask}>
          <input
            placeholder="Ask a question"
            className="text-white w-full h-full m-auto bg-transparent p-3"
            type="text"
            onChange={(e) => setInputQuestion(e.target.value)}
            value={inputQuestion}
          />
          <button
            type="submit"
            disabled={inputQuestion === ""}
            className="bg-white text-black w-24"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
