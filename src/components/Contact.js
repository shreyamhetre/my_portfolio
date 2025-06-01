"use client"

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "clamp(40px, 8vw, 80px) 20px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
      }}
    >
      <h2
        style={{
          color: "#1e293b",
          fontWeight: 700,
          marginBottom: "clamp(30px, 5vw, 50px)",
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          position: "relative",
        }}
      >
        Get In Touch
        <div
          style={{
            content: '""',
            position: "absolute",
            bottom: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "4px",
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            borderRadius: "2px",
          }}
        ></div>
      </h2>

      <p
        style={{
          color: "#64748b",
          lineHeight: 1.8,
          marginBottom: "clamp(30px, 5vw, 50px)",
          maxWidth: "600px",
          margin: "0 auto",
          fontSize: "clamp(16px, 2vw, 18px)",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want
        to say hi, I'll try my best to get back to you!
      </p>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "clamp(20px, 4vw, 40px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto 50px",
          border: "1px solid #e2e8f0",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <label
              style={{
                color: "#374151",
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontWeight: "600",
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              style={{
                width: "100%",
                padding: "15px 20px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "clamp(14px, 2vw, 16px)",
                transition: "all 0.3s ease",
                outline: "none",
                backgroundColor: "#f8fafc",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6"
                e.target.style.backgroundColor = "white"
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0"
                e.target.style.backgroundColor = "#f8fafc"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <label
              style={{
                color: "#374151",
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontWeight: "600",
              }}
            >
              Your Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              style={{
                width: "100%",
                padding: "15px 20px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "clamp(14px, 2vw, 16px)",
                transition: "all 0.3s ease",
                outline: "none",
                backgroundColor: "#f8fafc",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6"
                e.target.style.backgroundColor = "white"
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0"
                e.target.style.backgroundColor = "#f8fafc"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <label
              style={{
                color: "#374151",
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontWeight: "600",
              }}
            >
              Message
            </label>
            <textarea
              placeholder="Your message here..."
              rows={5}
              style={{
                width: "100%",
                padding: "15px 20px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "clamp(14px, 2vw, 16px)",
                transition: "all 0.3s ease",
                outline: "none",
                resize: "vertical",
                backgroundColor: "#f8fafc",
                fontFamily: "inherit",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6"
                e.target.style.backgroundColor = "white"
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0"
                e.target.style.backgroundColor = "#f8fafc"
                e.target.style.boxShadow = "none"
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "16px 20px",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginTop: "10px",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 12px 35px rgba(59, 130, 246, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.3)"
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          gap: "clamp(15px, 2vw, 25px)",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[
          { href: "mailto:shreya.mhetre@example.com", icon: "email", label: "Email" },
          { href: "https://www.linkedin.com/in/shreya-mhetre", icon: "linkedin", label: "LinkedIn" },
          { href: "https://github.com/shreyamhetre", icon: "github", label: "GitHub" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            style={{
              color: "#64748b",
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              border: "1px solid #e2e8f0",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
              e.target.style.color = "white"
              e.target.style.transform = "translateY(-5px)"
              e.target.style.boxShadow = "0 15px 35px rgba(59, 130, 246, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white"
              e.target.style.color = "#64748b"
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            {social.icon === "email" && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            )}
            {social.icon === "linkedin" && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            )}
            {social.icon === "github" && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact