import "./LandingPage.css";
import { ChevronDown, Search } from "lucide-react";

import "@fontsource/inter";
function LandingPage() {
  return (
    <div className="landing-page-body">
      <div className="blocks block-1 nav-bar">
        <div className="bar">
          <div className="playstake-logo">
            <img src="public/images/PlayStakeLogo.jpeg" alt="playstakeLogo" />
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
            Sponsors{" "}
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
      <div className="blocks block-2 main-content"></div>
    </div>
  );
}

export default LandingPage;
