import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBell } from "react-icons/fa";
import { toast } from "react-toastify";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  const fetch = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/user/patient/notifications", { withCredentials: true });
      setNotifications(data.notifications || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch();
    const id = setInterval(fetch, 30000);
    return () => clearInterval(id);
  }, []);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markRead = async (nid) => {
    try {
      await axios.put(`http://localhost:4000/api/v1/user/patient/notifications/${nid}/read`, {}, { withCredentials: true });
      toast.success("Marked read");
      fetch();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed");
    }
  };

  const markAll = async () => {
    try {
      await axios.put("http://localhost:4000/api/v1/user/patient/notifications/readall", {}, { withCredentials: true });
      toast.success("All marked read");
      fetch();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="notifications-wrapper" style={{ position: "relative", marginRight: 12 }}>
      <button className="btn" onClick={() => setOpen((v) => !v)} style={{ position: "relative" }} aria-label="Notifications">
        <FaBell />
        {unreadCount > 0 && (
          <span style={{ background: "red", color: "white", borderRadius: 10, padding: "2px 6px", marginLeft: 6 }}>{unreadCount}</span>
        )}
      </button>

      {open && (
        <div
          className="notifications-overlay"
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}
          onClick={() => setOpen(false)}
        >
          <div
            className="notifications-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#fff", width: "min(92%, 520px)", maxHeight: "80vh", overflowY: "auto", borderRadius: 8, padding: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <strong>Notifications</strong>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn" onClick={markAll}>Mark all</button>
                <button className="btn" onClick={() => setOpen(false)} aria-label="Close notifications">X</button>
              </div>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {notifications.length === 0 && <li style={{ padding: 12 }}>No notifications</li>}
              {notifications.map((n) => (
                <li key={n._id} style={{ padding: 12, borderBottom: "1px solid #eee", opacity: n.isRead ? 0.6 : 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ wordBreak: "break-word" }}>{n.message}</div>
                      <small style={{ color: "#666" }}>{new Date(n.createdAt).toLocaleString()}</small>
                    </div>
                    {!n.isRead && (
                      <button className="btn" onClick={() => markRead(n._id)} aria-label={`Mark ${n._id} read`}>📅</button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
