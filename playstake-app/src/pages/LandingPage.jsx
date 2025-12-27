import "./LandingPage.css";
import { ChevronDown, Search, ChevronRight, Gamepad } from "lucide-react";
import "@fontsource-variable/mona-sans";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function LandingPage() {
  const [ref1, inView] = useInView({ threshold: 0.5, triggerOnce: false });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const fadeOut = Math.max(0, 1 - scrollY / 500);
  const fadeOutShinny = Math.max(0, 0.6 - scrollY / 1000);
  const scaleDown = Math.max(0.8, 1 - scrollY / 7000);
  const translateY = Math.max(0, 100 - scrollY / 5);
  const translateLeft = Math.max(-500, 0 - scrollY / 5); // coin target x
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="landing-page-body">
      <div
        className={
          "blocks block-1 nav-bar" + (scrollY >= 400 ? " black-nav" : "")
        }
        ref={ref1}
      >
        <div className="bar">
          <div className="playstake-logo">
            <img src="/images/PlayStakeLogo.jpeg" alt="playstakeLogo" />
          </div>

          <div className="nav-items">
            About PlayStake{" "}
            <ChevronDown
              className="chevron-icon"
              size={18}
              style={{ marginLeft: "4px" }}
            />
          </div>
          <div className="nav-items">
            How It Works{" "}
            <ChevronDown
              className="chevron-icon"
              size={18}
              style={{ marginLeft: "4px" }}
            />
          </div>
          <div className="nav-items">
            Features{" "}
            <ChevronDown
              className="chevron-icon"
              size={18}
              style={{ marginLeft: "4px" }}
            />
          </div>
          <div className="nav-items">
            Leagues{" "}
            <ChevronDown
              className="chevron-icon"
              size={18}
              style={{ marginLeft: "4px" }}
            />
          </div>
          <div className="nav-items">
            Place a bet
            <ChevronDown
              className="chevron-icon"
              size={18}
              style={{ marginLeft: "4px" }}
            />
          </div>
          <div className="nav-items">
            Pricing{" "}
            <ChevronDown
              className="chevron-icon"
              size={18}
              style={{ marginLeft: "4px" }}
            />
          </div>
        </div>
        <div className="bar">
          <div className="search-input">
            <div className="search-icon">
              <Search size={18} style={{ color: "#ffffffd5" }} />
            </div>
            <input
              type="text"
              className="search-box"
              placeholder="Search PlayStake"
            />
          </div>

          <div className="sign in">Sign in</div>
          <div className="sign up">Sign up</div>
        </div>
      </div>
      <motion.div className="blocks block-2 main-content">
        <div
          className="b2-1"
          style={{ opacity: `${fadeOut}`, transform: `scale(${scaleDown})` }}
        >
          <div className="b2-1-text">
            {" "}
            <div className="kick-off-icon">
              <img src="/images/kickof.png" alt="" />
            </div>
            <div className="div-text">Enter The Arena</div>{" "}
            <ChevronRight size={20}></ChevronRight>
          </div>
        </div>
        <div
          className="b2-2"
          style={{ opacity: `${fadeOut}`, transform: `scale(${scaleDown})` }}
        >
          <div className="b2-2-text">
            Turn competitive gaming into real opportunity.
          </div>
        </div>
        <div
          className="b2-3"
          style={{ opacity: `${fadeOut}`, transform: `scale(${scaleDown})` }}
        >
          <div className="b2-3-text">
            PlayStake is a competitive gaming platform where players challenge
            opponents, spectators engage in real time, and performance is
            rewarded through a transparent digital economy.
          </div>
        </div>
        <div className="b2-4" style={{ opacity: `${fadeOut}` }}>
          <div className="b2-4-sign-up">
            <div className="sign-up-inp">
              <input type="text" name="" id="" placeholder="Enter your email" />
            </div>
            <div className="sign-up-btn">Sign up for PlayStake</div>
          </div>
        </div>

        <div className="b2-5">
          <div className="b2-5-items e-coins">
            <motion.img
              initial={{
                x: 0,
                y: -1000,
                opacity: 0,
                rotate: 0,
                rotateY: 0,
              }}
              animate={{
                y: 0,
                x: translateLeft,
                opacity: fadeOut,
                rotate: [-180, 360],
                rotateY: 180,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.6,
                x: { duration: 0, delay: 0 },
                opacity: { duration: 0, delay: 0 },
              }}
              src="/images/ecoin.png"
              alt="e-coins"
            />
          </div>
          <div className="b2-5-items game-pad-1">
            <motion.img
              initial={{ y: 480, opacity: 0, rotate: 0, scale: 1 }}
              animate={{
                y: 80,
                opacity: fadeOut,
                rotate: [180, 0],
                scale: scaleDown,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                opacity: { duration: 0, delay: 0 },
                scale: { duration: 0, delay: 0 },
              }}
              src="/images/hero1.png"
              alt="gamepad1"
            />
          </div>
          <div className="b2-5-items game-pad-2">
            <motion.img
              initial={{ x: 600, opacity: 0, scale: 1, rotate: 0, rotateX: 0 }}
              animate={{
                x: 0,
                opacity: fadeOut,
                scale: scaleDown,
                rotate: [90, 180],
                rotateX: 180,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.6,
                scale: { duration: 0, delay: 0 },
                opacity: { duration: 0, delay: 0 },
              }}
              src="/images/gamepadnew.png"
              alt="gamepad2"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, transform: "none", rotateX: 0 }}
          animate={{
            opacity: fadeOutShinny,
            transform: "translate(10%, -55%)",
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.8,
            opacity: { duration: 0, delay: 0 },
          }}
          className="shinny-bubble"
        ></motion.div>
      </motion.div>

      <motion.div
        className="blocks block-3"
        style={{ translateY: `${translateY}px` }}
      >
        <div className="screens">
          {activeScreen == 0 && (
            <motion.div className="b3-video-screen screen-1">
              <h1>screen 1</h1>
            </motion.div>
          )}
          {activeScreen == 1 && (
            <motion.div className="b3-video-screen screen-2">
              <h1>screen 2</h1>
            </motion.div>
          )}
          {activeScreen == 2 && (
            <motion.div className="b3-video-screen screen-3">
              <h1>screen 3</h1>
            </motion.div>
          )}
          {activeScreen == 3 && (
            <motion.div className="b3-video-screen screen-4">
              <h1>screen 4</h1>
            </motion.div>
          )}
        </div>

        <div className="btn-par-cont">
          <div className="screen-btns">
            <button
              onClick={() => {
                setActiveScreen(0);
              }}
              className={"s-btns" + (activeScreen === 0 ? " active" : "")}
            >
              Matchmaking
            </button>
            <button
              onClick={() => {
                setActiveScreen(1);
              }}
              className={"s-btns" + (activeScreen === 1 ? " active" : "")}
            >
              Real Time Spectate
            </button>
            <button
              onClick={() => {
                setActiveScreen(2);
              }}
              className={"s-btns" + (activeScreen === 2 ? " active" : "")}
            >
              Leagues
            </button>
            <button
              onClick={() => {
                setActiveScreen(3);
              }}
              className={"s-btns" + (activeScreen === 3 ? " active" : "")}
            >
              Bets
            </button>
          </div>
          <div className="about-grid">
            <div className="box about-text">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 70, boxShadow: "0 0 0px #ef801184" }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        boxShadow: "0 0 20px #ef801184",
                      }
                    : {
                        opacity: 0,
                        y: 70,
                        boxShadow: "0 0 0px #ef801184",
                      }
                }
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  boxShadow: { duration: 0.5, delay: 1 },
                }}
                className="hold-container-text"
              >
                <h2>
                  {" "}
                  <Gamepad size={50}></Gamepad> About <span>PlayStake</span>
                </h2>
                <p>
                  PlayStake is a web-based{" "}
                  <span>competitive gaming platform</span> that transforms
                  casual play into structured, fair, and rewarding competition.
                  Players compete in skill-based matches, track performance, and
                  <span> earn through a secure in-platform economy</span>.
                  Spectators actively engage through live updates, gifting, and
                  community interaction. PlayStake bridges gaming, competition,
                  and digital opportunity accessible anytime, directly from the
                  browser.
                </p>
                <div className="more-btn">
                  Learn More{" "}
                  <ChevronRight
                    size={20}
                    style={{ transform: "translateY(1px)" }}
                  ></ChevronRight>
                </div>
              </motion.div>
            </div>

            <motion.div className="box">
              <motion.div
                className="flow-image"
                ref={ref1}
                initial={{ opacity: 0, transform: "none", rotateX: 0 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        transform: "translate(0%, 15%)",
                        background: "rgba(0, 0, 0, 1)",
                        boxShadow: "-2px 0 0 0 10px #ef750b60",
                      }
                    : { opacity: 0, transform: "translate(20%, 28%)" }
                }
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0,
                  boxShadow: { duration: 0.5, delay: 0.3 },
                }}
              >
                <img src="public/images/PS Flow.png" alt="" />
                <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, transform: "none", rotateX: 0 }}
                  animate={
                    inView
                      ? { opacity: 0.4, transform: "translate(-10%, -20%)" }
                      : { opacity: 0, transform: "translate(0%, 0%)" }
                  }
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                  className="shinny-bubble bub-3 "
                ></motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, transform: "none", rotateX: 0 }}
              animate={
                inView
                  ? { opacity: 0.7, transform: "translate(10%, 8%)" }
                  : { opacity: 0, transform: "translate(0%, 0%)" }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              className="shinny-bubble bub-2"
            >
              {" "}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
