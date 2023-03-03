"use client";

import { Analytics } from "@/services/analytics";
import axios from "axios";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Title } from "../title/title";

type Conversation = {
  question: string;
  answerer?: string;
};

export const Chat = () => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const [inputQuestion, setInputQuestion] = useState("");

  const ask = useCallback(async () => {
    if(inputQuestion === "") return
    Analytics.chat(inputQuestion)
    let currentConverstaion: Conversation = {
      question: inputQuestion,
      answerer: "...",
    };
    setConversation([...conversation, currentConverstaion]);
    setInputQuestion("");

    
    const {
      data: { answerer },
    } = await axios.post("/api/chat", {
      data: {
        question: currentConverstaion.question,
        conversation
      },
    });

    currentConverstaion.answerer = answerer;

    setConversation([...conversation, currentConverstaion]);
  }, [conversation, inputQuestion]);

  useEffect(() => {
    const chat_El = document.getElementById("chat-container");
    if (conversation.at(-1)?.answerer === "..." && chat_El) {
      chat_El.scrollTop = chat_El.scrollHeight - 450;
      setTimeout(() => (chat_El.scrollTop = chat_El.scrollHeight), 1000);
    }
  }, [conversation]);

  return (
    <div className="w-full h-screen sm:w-2/3 my-20">
      <Title> My Assistant</Title>
      <div className="bg-[#111821] border border-white text-white rounded-lg shadow-xl overflow-hidden">
        <div className="h-96 overflow-auto p-3" id="chat-container">
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
            <div className="" key={i.question + index}>
              <p className="text-right mb-2">
                <span className="bg-blue-800 inline-block p-2 rounded-xl overflow-hidden break-all ml-10 max-w-lg shadow-xl">
                  {i.question}
                </span>
              </p>
              <p className="mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="bg-lime-800 inline-block p-2 rounded-xl overflow-hidden break-word mr-10 max-w-lg shadow-xl"
                >
                  {i.answerer || "..."}
                </motion.span>
              </p>
            </div>
          ))}
        </div>

        <div className="w-full h-10 flex border-top border-t-2">
          <input
            placeholder="Ask a question"
            className="text-white w-full h-full m-auto bg-transparent p-3"
            type="text"
            onChange={(e) => setInputQuestion(e.target.value)}
            value={inputQuestion}
          />
          <button disabled={inputQuestion === ""} className="bg-white text-black w-24" onClick={ask}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
