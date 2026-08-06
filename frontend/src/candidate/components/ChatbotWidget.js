import React, { useState } from "react";

function ChatbotWidget() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm your AI Career Assistant. How can I help you?"
    }
  ]);

  const sendMessage = () => {

    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "user",
        text: message
      },
      {
        sender: "bot",
        text: "AI response will be connected through Gemini later."
      }
    ]);

    setMessage("");
  };

  return (

    <>

      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          right: "25px",
          bottom: "25px",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          border: "none",
          background: "#2563eb",
          color: "white",
          fontSize: "23px",
          cursor: "pointer"
        }}
      >
        💬
      </button>


      {open && (

        <div style={{
          position: "fixed",
          right: "25px",
          bottom: "90px",
          width: "330px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
          overflow: "hidden"
        }}>

          <div style={{
            background: "#2563eb",
            color: "white",
            padding: "15px",
            fontWeight: "bold"
          }}>
            AI Career Assistant 🤖
          </div>


          <div style={{
            height: "280px",
            padding: "15px",
            overflowY: "auto"
          }}>

            {messages.map((msg, index) => (

              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  textAlign:
                    msg.sender === "user"
                      ? "right"
                      : "left"
                }}
              >

                <span style={{
                  display: "inline-block",
                  padding: "9px",
                  borderRadius: "8px",
                  background:
                    msg.sender === "user"
                      ? "#dbeafe"
                      : "#f3f4f6"
                }}>
                  {msg.text}
                </span>

              </div>

            ))}

          </div>


          <div style={{
            display: "flex",
            padding: "10px",
            borderTop: "1px solid #eee"
          }}>

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "9px",
                border: "1px solid #ddd",
                borderRadius: "6px"
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                marginLeft: "5px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "9px 12px",
                borderRadius: "6px"
              }}
            >
              Send
            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default ChatbotWidget;