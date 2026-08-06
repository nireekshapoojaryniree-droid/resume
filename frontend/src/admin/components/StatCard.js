import React from "react";

function StatCard({ title, value, icon, color }) {
  const c = color || "#9b4d6a";
  return (
    <div style={{
      background: "white",
      padding: "24px",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
      borderTop: `4px solid ${c}`,
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "13px", fontWeight: "600", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          {title}
        </span>
        {icon && (
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${c}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
            {icon}
          </div>
        )}
      </div>
      <p style={{ fontSize: "34px", fontWeight: "800", color: c, lineHeight: 1, margin: 0 }}>{value}</p>
    </div>
  );
}

export default StatCard;
