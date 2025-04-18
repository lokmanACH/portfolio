import React from "react";
import { motion } from "framer-motion";
import * as Separator from "@radix-ui/react-separator";
import logo from "../icons/coding.png";
import "../style/heroStyle.css";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero-background">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="hero-blob"
            animate={{
              x: [Math.random() * 100, Math.random() * -100],
              y: [Math.random() * 100, Math.random() * -100],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20 + Math.random() * 10,
            }}
            initial={{
              width: 300 + Math.random() * 300,
              height: 300 + Math.random() * 300,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              background: [
                "var(--brand-yellow)",
                "var(--brand-orange)",
                "var(--brand-pink)",
                "var(--brand-purple)",
                "var(--brand-deep-purple)",
              ][i % 5],
            }}
          />
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Transforming Ideas Into Digital Reality
              </h1>

              <p className="hero-subtitle">
                We build cutting-edge websites and applications using modern
                technologies to help your business thrive in the digital world.
              </p>

              <div className="hero-buttons">
                <button
                  className="hero-button hero-button-primary"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Started
                </button>
                <button
                  className="hero-button hero-button-outlined"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Our Work
                </button>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={logo}
                alt="Web Development"
                className="hero-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;