import "./hero.styles.css";
import { useRef } from "react";

const Hero = () => {
  const inputRef = useRef(null);

  // Function to handle search input
  const searchInput = () => {
    const input = inputRef.current.value;
    window.location.href =
      "https://www.google.com/search?q=" +
      input +
      "&rlz=1C5CHFA_enNZ948NZ948&oq=" +
      input +
      "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8";
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputRef.current.value) {
        searchInput();
      }
    }
  };

  return (
    <section className="contentSection">
      <div className="contentWrapper">
        <img className="logoImg" src="./google.png" alt="google logo" />
        <div className="searchBar">
          {/* Search icon */}
          <svg
            className="inputIcon"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
          {/* Search input */}
          <input
            ref={inputRef}
            id="search-input"
            className="searchInput"
            type="search"
            onKeyPress={handleKeyPress}
          />
          {/* Microphone icon */}
          <svg
            className="inputIcon"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            ></path>
            <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
            <path
              fill="#fbbc04"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            ></path>
            <path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            ></path>
          </svg>
          {/* Google Search and I'm Feeling Lucky buttons */}
        </div>
        <div className="searchBtns">
          <button
            className="googleSearchBtn"
            onClick={(e) => {
              // Function to handle search button click
              if (inputRef.current.value !== "") {
                searchInput();
              }
            }}
          >
            Google Search
          </button>
          <a href="https://doodles.google/">
            <button className="luckySearchBtn">I'm Feeling Lucky</button>
          </a>
        </div>
        {/* Language selection */}
        <div className="language">
          <p>
            Google Offered in:&nbsp;
            <a href="#">हिन्दी</a>
            <a href="#">বাংলা</a>
            <a href="#">తెలుగు</a>
            <a href="#">मराठी</a>
            <a href="#">தமிழ்</a>
            <a href="#">ગુજરાતી</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
