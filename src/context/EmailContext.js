import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [emails, setEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [replying, setReplying] = useState(false);
  const [error, setError] = useState(null);

  const fetchEmails = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEmails(response.data.data);
    } catch (error) {
      console.error("Error fetching emails:", error);
      setError("Failed to fetch emails.");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmailDetail = async (threadId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSelectedEmails(response.data.data);
    } catch (error) {
      console.error("Error fetching email detail:", error);
      setError("Failed to fetch email details.");
    }
  };

  const deleteEmail = async (threadId) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEmails((prevEmails) =>
        prevEmails.filter((email) => email.threadId !== threadId)
      );
      setSelectedEmails([]);
    } catch (error) {
      console.error("Error deleting email:", error);
      setError("Failed to delete email.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "D" || event.key === "d") {
      if (selectedEmails.length > 0) deleteEmail(selectedEmails[0].threadId);
    } else if (event.key === "R" || event.key === "r") {
      setReplying(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEmails]);

  return (
    <EmailContext.Provider
      value={{
        emails,
        selectedEmails,
        fetchEmailDetail,
        deleteEmail,
        replying,
        setReplying,
        error,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
