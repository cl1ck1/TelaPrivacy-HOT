import { useState, useEffect } from "react";

const LockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const LockIconSm = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const HeartIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const MessageIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const BookmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className="chevron"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", color: "#9ca3af" }}
  >
    <path d="M19 9l-7 7-7-7"></path>
  </svg>
);

const CheckBadge = () => (
  <div style={{ width: 18, height: 18, marginTop: -4 }}>
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="rgb(253, 115, 80)" d="M190.6 71.4C203 47.9 227.7 32 256 32s53 15.9 65.4 39.4c3.6 6.8 11.5 10.1 18.8 7.8c25.4-7.8 54.1-1.6 74.1 18.4s26.2 48.7 18.4 74.1c-2.3 7.3 1 15.2 7.8 18.8C464.1 203 480 227.7 480 256s-15.9 53-39.4 65.4c-6.8 3.6-10.1 11.5-7.8 18.8c7.8 25.4 1.6 54.1-18.4 74.1s-48.7 26.2-74.1 18.4c-7.3-2.3-15.2 1-18.8 7.8C309 464.1 284.3 480 256 480s-53-15.9-65.4-39.4c-3.6-6.8-11.5-10.1-18.8-7.8c-25.4 7.8-54.1 1.6-74.1-18.4s-26.2-48.7-18.4-74.1c2.3-7.3-1-15.2-7.8-18.8C47.9 309 32 284.3 32 256s15.9-53 39.4-65.4c6.8-3.6 10.1-11.5 7.8-18.8c-7.8-25.4-1.6-54.1 18.4-74.1s48.7-26.2 74.1-18.4c7.3 2.3 15.2-1 18.9-7.9zM352.8 209.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 293.4l-41.4-41.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0l117.5-117.5z"/>
    </svg>
  </div>
);

interface PostCardProps {
  likes: number;
  comments: number;
  lockedImage?: boolean;
}

function PostCard({ likes, comments }: PostCardProps) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "0.5rem",
      boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)",
      overflow: "hidden",
      marginBottom: 20
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
        borderBottom: "1px solid #f3f4f6"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src="/fotoperfileduarda.jpg"
            alt="Foto de Perfil"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "0% 9%"
            }}
          />
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.125rem" }}>Ana Flavia</h4>
            <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>@affbahxx</p>
          </div>
        </div>
        <button style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: "2rem", height: "2rem", borderRadius: "50%",
          border: "none", backgroundColor: "transparent", color: "#6b7280", cursor: "pointer"
        }}>
          <DotsIcon />
        </button>
      </div>

      <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src="/fotoperfileduarda.jpg"
            style={{ objectFit: "cover", width: "100%", height: "100%", filter: "blur(8px) brightness(0.6)", transform: "scale(1.1)" }}
            alt=""
          />
          <div style={{
            position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.3)", zIndex: 2
          }}>
            <div style={{
              color: "#9ca3af", backgroundColor: "rgba(255,255,255,0.5)",
              width: "4rem", height: "4rem", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem"
            }}>
              <LockIcon />
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: "1rem",
              padding: "0.75rem 1rem", fontSize: "0.75rem", color: "#4b5563",
              backgroundColor: "rgba(255,255,255,0.5)", borderRadius: "0.5rem"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <HeartIcon size={16} /><span>{likes}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <MessageIcon size={16} /><span>{comments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", padding: "0.75rem 1rem" }}>
        <button style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem", border: "none", backgroundColor: "transparent", color: "#4b5563", cursor: "pointer", borderRadius: "0.25rem" }}>
          <HeartIcon size={20} />
        </button>
        <button style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem", border: "none", backgroundColor: "transparent", color: "#4b5563", cursor: "pointer", borderRadius: "0.25rem" }}>
          <MessageIcon size={20} />
        </button>
        <button style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem", border: "none", backgroundColor: "transparent", color: "#4b5563", cursor: "pointer", borderRadius: "0.25rem", marginLeft: "auto" }}>
          <BookmarkIcon />
        </button>
      </div>
    </div>
  );
}

export default function SalesPage() {
  const [activeTab, setActiveTab] = useState<"posts" | "media">("posts");
  const [bioExpanded, setBioExpanded] = useState(false);
  const [promotionsOpen, setPromotionsOpen] = useState(true);
  const [promoDate, setPromoDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    setPromoDate(`${dd}/${mm}/${yyyy}`);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #f9fafb;
          color: #1f2937;
          line-height: 1.5;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(249, 115, 22, 0); }
          100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
        }

        .pulse-btn {
          animation: pulse 2s infinite;
        }

        .sub-btn-primary:hover {
          background: linear-gradient(to right, #f97316, #ea580c) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }

        .sub-btn-outline:hover {
          background-color: #fff7ed !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }

        .tab-btn:hover {
          background-color: #e5e7eb;
        }
      `}</style>
      {/* Promo Banner */}
      <div style={{
        backgroundColor: "#ff641c",
        color: "#ffffff",
        textAlign: "center",
        padding: "10px 20px",
        fontWeight: "bold",
        textTransform: "uppercase",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        fontSize: 15,
        fontFamily: "Inter, sans-serif"
      }}>
        {promoDate ? `ESSA PROMOÇÃO É VÁLIDA ATÉ ${promoDate}` : "ESSA PROMOÇÃO É VÁLIDA ATÉ ..."}
      </div>
      {/* Header */}
      <header style={{
        position: "sticky",
        top: 40,
        zIndex: 10,
        backgroundColor: "white",
        borderBottom: "1px solid #f3f4f6",
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)"
      }}>
        <div style={{
          width: "100%", maxWidth: 768, margin: "0 auto", padding: "0 1rem",
          display: "flex", alignItems: "center", justifyContent: "center", height: "4rem"
        }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ea580c", letterSpacing: "-0.02em" }}>Privacy</span>
          </div>
        </div>
      </header>
      <main style={{ width: "100%", maxWidth: 768, margin: "0 auto", padding: "2rem 1rem", paddingTop: "1rem" }}>
        {/* Profile Section */}
        <div style={{ position: "relative", marginBottom: 50 }}>
          {/* Banner */}
          <div style={{ position: "relative", width: "100%", height: "12rem", borderRadius: "0.75rem", overflow: "hidden" }}>
            <img
              src="/fotocapavivi.jpg"
              alt="Foto de Capa"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "20% 60%" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))"
            }} />
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", right: "1.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", textShadow: "0 1px 3px rgba(0,0,0,0.3)", marginBottom: "0.5rem" }}>
                Ana Fla 💋
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.875rem", color: "white" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <svg viewBox="0 0 512 512" style={{ width: 17 }} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M64 64C46.3 64 32 78.3 32 96V329.4l67.7-67.7c15.6-15.6 40.9-15.6 56.6 0L224 329.4 355.7 197.7c15.6-15.6 40.9-15.6 56.6 0L480 265.4V96c0-17.7-14.3-32-32-32H64zM32 374.6V416c0 17.7 14.3 32 32 32h41.4l96-96-67.7-67.7c-3.1-3.1-8.2-3.1-11.3 0L32 374.6zM389.7 220.3c-3.1-3.1-8.2-3.1-11.3 0L150.6 448H448c17.7 0 32-14.3 32-32V310.6l-90.3-90.3zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"/>
                  </svg>
                  <span>401</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <svg viewBox="0 0 576 512" style={{ width: 17 }} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M64 96c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zM0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64v47.2V336.8 384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM519.4 411.3L416 354.4V317.9l118.8 65.4c.9.5 1.9.8 3 .8c3.4 0 6.2-2.8 6.2-6.2V134.2c0-3.4-2.8-6.2-6.2-6.2c-1 0-2.1.3-3 .8L416 194.1V157.6l103.4-56.9c5.6-3.1 12-4.7 18.4-4.7c21.1 0 38.2 17.1 38.2 38.2V373.8c0 21.1-17.1 38.2-38.2 38.2c-6.4 0-12.8-1.6-18.4-4.7z"/>
                  </svg>
                  <span>438</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <HeartIcon size={16} /><span>229K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div style={{
            position: "absolute", bottom: "-2.5rem", left: "1.5rem",
            width: 120, height: 120, borderRadius: "50%",
            overflow: "hidden", border: "3px solid white",
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)", zIndex: 5
          }}>
            <img
              src="/fotoperfileduarda.jpg"
              alt="Foto de Perfil"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Profile Card */}
        <div style={{
          backgroundColor: "white", borderRadius: "0.5rem",
          boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)", marginBottom: "1.5rem",
          overflow: "hidden", paddingTop: "0.5rem", marginTop: 0
        }}>
          <div style={{ padding: "1.5rem", paddingTop: 14 }}>
            {/* Name + badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ display: "block", fontSize: "1.125rem", fontWeight: 600, color: "#1f2937", marginBottom: "0.25rem" }}>
                Ana Flavia
              </span>
              <CheckBadge />
            </div>

            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.5rem" }}>@affbahxx</p>

            {/* Bio */}
            <div style={{ marginBottom: 10 }}>
              <p style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: bioExpanded ? "unset" : 2,
                WebkitBoxOrient: "vertical" as const,
                transition: "0.3s ease",
                fontSize: "0.875rem",
                color: "#374151"
              } as React.CSSProperties}>
                Oi, meu amor! 🔥💦 Sou a Bah, organizadora desse album feito só pra você. Separei-me recentemente para revelar um lado meu que você nunca viu. Acabei de abrir meu Privacy e hoje vou te deixar sem fôlego!{"\n\n"}
                Aqui você vai encontrar minha nova vida, sem censura: vídeos exclusivos, momentos íntimos e fotos picantes. 😏 Cada centímetro do meu corpo é pura tentação e minhas mídias são um convite para você explorar seus desejos mais secretos.
              </p>
              <button
                onClick={() => setBioExpanded(!bioExpanded)}
                style={{
                  marginTop: 8, background: "transparent", border: "none",
                  color: "#ff6b3d", fontSize: 16, cursor: "pointer", fontWeight: 600
                }}
              >
                {bioExpanded ? "Mostrar menos" : "Mostrar mais"}
              </button>
            </div>

            {/* Subscriptions Card */}
            <div style={{
              backgroundColor: "white", borderRadius: "0.5rem",
              boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)", marginBottom: "1.5rem", overflow: "hidden"
            }}>
              <div style={{ padding: "1.5rem 1.5rem 0.5rem" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 500 }}>Assinaturas</h3>
              </div>
              <div style={{ padding: "1.5rem", paddingTop: "0.2rem" }}>
                <span style={{
                  display: "block", width: "fit-content",
                  padding: "0.125rem 0.5rem", fontSize: "0.75rem", fontWeight: 500,
                  borderRadius: 9999, backgroundColor: "#ffedd5", color: "#9a3412", marginBottom: "0.75rem"
                }}>
                  MAIS POPULAR 🔥🔥
                </span>

                <a href="https://go.invictuspay.app.br/9gaoevludn" style={{ display: "block", textDecoration: "none", marginBottom: "0.75rem" }}>
                  <button className="sub-btn-primary pulse-btn" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", height: "3.5rem", padding: "0 1.5rem",
                    borderRadius: "0.5rem", border: "none", fontSize: "1rem", fontWeight: 500,
                    cursor: "pointer", transition: "all 0.2s",
                    background: "linear-gradient(to right, #fb923c, #f97316)",
                    color: "white"
                  }}>
                    <b>30 DIAS</b>
                    <span style={{ fontWeight: 700 }}>R$ 9,90</span>
                  </button>
                </a>

                <span style={{
                  marginTop: -16, display: "block", width: "fit-content",
                  padding: "0.125rem 0.5rem", fontSize: "0.75rem", fontWeight: "bold",
                  borderRadius: 9999, backgroundColor: "#ffedd5", color: "#9a3412", marginBottom: "1.5rem"
                }}>
                  + CHAMADA DE VIDEO COMIGO HOJE!
                </span>

                {/* Promotions */}
                <div style={{ marginTop: "1.5rem" }}>
                  <div
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem", cursor: "pointer" }}
                    onClick={() => setPromotionsOpen(!promotionsOpen)}
                  >
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 500 }}>Promoções</h4>
                    <ChevronIcon open={promotionsOpen} />
                  </div>

                  {promotionsOpen && (
                    <>
                      <a href="https://go.invictuspay.app.br/q63tdziyni" style={{ display: "block", textDecoration: "none", marginBottom: "0.75rem" }}>
                        <button className="sub-btn-outline" style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          width: "100%", height: "3.5rem", padding: "0 1.5rem",
                          borderRadius: "0.5rem", backgroundColor: "white",
                          border: "1px solid #fed7aa", color: "#1f2937",
                          fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", transition: "all 0.2s"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span>3 Meses</span>
                            <span style={{
                              padding: "0.125rem 0.5rem", fontSize: "0.7rem", fontWeight: 500,
                              borderRadius: 9999, backgroundColor: "#ffedd5", color: "#9a3412"
                            }}>Economia</span>
                          </div>
                          <span style={{ fontWeight: 700, color: "#ea580c", fontSize: "0.9rem" }}>R$ 14,90</span>
                        </button>
                      </a>

                      <a href="https://go.invictuspay.app.br/r2fcyj9jjf" style={{ display: "block", textDecoration: "none", marginBottom: "0.75rem" }}>
                        <button className="sub-btn-outline" style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          width: "100%", height: "3.5rem", padding: "0 1.5rem",
                          borderRadius: "0.5rem", backgroundColor: "white",
                          border: "1px solid #fed7aa", color: "#1f2937",
                          fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", transition: "all 0.2s"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span>1 ANO</span>
                            <span style={{
                              padding: "0.125rem 0.5rem", fontSize: "0.7rem", fontWeight: 500,
                              borderRadius: 9999, backgroundColor: "#ffedd5", color: "#9a3412"
                            }}>Melhor oferta</span>
                          </div>
                          <span style={{ fontWeight: 700, color: "#ea580c", fontSize: "0.9rem" }}>R$ 29,90</span>
                        </button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                borderRadius: "0.5rem", overflow: "hidden", marginBottom: "1rem"
              }}>
                <button
                  className="tab-btn"
                  onClick={() => setActiveTab("posts")}
                  style={{
                    padding: "0.75rem", textAlign: "center", fontSize: "0.875rem",
                    backgroundColor: activeTab === "posts" ? "#fff7ed" : "#f3f4f6",
                    border: "none", cursor: "pointer", transition: "background-color 0.2s",
                    color: activeTab === "posts" ? "#f97316" : "#4b5563",
                    fontWeight: activeTab === "posts" ? 500 : 400,
                    boxShadow: activeTab === "posts" ? "inset -1px 0 0 #fed7aa" : "none"
                  }}
                >
                  93 postagens
                </button>
                <button
                  className="tab-btn"
                  onClick={() => setActiveTab("media")}
                  style={{
                    padding: "0.75rem", textAlign: "center", fontSize: "0.875rem",
                    backgroundColor: activeTab === "media" ? "#fff7ed" : "#f3f4f6",
                    border: "none", cursor: "pointer", transition: "background-color 0.2s",
                    color: activeTab === "media" ? "#f97316" : "#4b5563",
                    fontWeight: activeTab === "media" ? 500 : 400,
                    boxShadow: activeTab === "media" ? "inset 1px 0 0 #fed7aa" : "none"
                  }}
                >
                  412 mídias
                </button>
              </div>

              {/* Posts Tab */}
              {activeTab === "posts" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  <PostCard likes={248} comments={126} />
                  <PostCard likes={549} comments={362} />
                  <PostCard likes={872} comments={532} />
                  <PostCard likes={872} comments={532} />
                </div>
              )}

              {/* Media Tab */}
              {activeTab === "media" && (
                <div>
                  <div style={{
                    display: "flex", justifyContent: "center", gap: "0.5rem",
                    marginBottom: "1rem", overflowX: "auto", paddingBottom: "0.5rem"
                  }}>
                    {["412 todos", "258 fotos", "154 vídeos"].map((label, i) => (
                      <button key={i} style={{
                        padding: "0.5rem 1rem", fontSize: "0.75rem",
                        backgroundColor: i === 0 ? "#ffedd5" : "#f3f4f6",
                        border: "none", borderRadius: "0.25rem", cursor: "pointer",
                        color: i === 0 ? "#c2410c" : "#4b5563",
                        fontWeight: i === 0 ? 500 : 400, whiteSpace: "nowrap"
                      }}>
                        {label}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} style={{
                        position: "relative", aspectRatio: "1 / 1",
                        backgroundColor: "#fff7ed", borderRadius: "0.25rem",
                        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <span style={{
                          position: "absolute", fontSize: "1.5rem", fontWeight: 700,
                          color: "#ea580c", opacity: 0.1, userSelect: "none"
                        }}>privacy</span>
                        <div style={{
                          color: "#9ca3af", backgroundColor: "rgba(255,255,255,0.5)",
                          width: "3rem", height: "3rem", borderRadius: "50%",
                          display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          <LockIconSm />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a href="https://go.invictuspay.app.br/9gaoevludn" style={{ display: "block", textDecoration: "none", marginTop: "1.5rem" }}>
              <button style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", height: "3.5rem", padding: "0 1.5rem",
                borderRadius: "0.5rem", border: "none", fontSize: "1rem", fontWeight: 500,
                cursor: "pointer", background: "linear-gradient(to right, #fb923c, #f97316)", color: "white"
              }}>
                <b>VEJA TUDO POR APENAS <strong>R$ 9,90</strong></b>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5L15.57 11.6237C15.7976 11.8229 15.7976 12.1771 15.57 12.3763L8 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
