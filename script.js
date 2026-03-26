body {
  margin: 0;
  height: 100vh;
  font-family: Arial, sans-serif;
  transition: background 1s ease;
}

.overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

/* Gradient text with shadow behind */
h1 {
  font-size: 4rem;
  position: relative;
  display: inline-block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: -4px;                  /* shadow slightly left */
  z-index: -1;                 /* behind main text */
  color: rgba(0, 0, 0, 0.6);  /* shadow color */
  filter: blur(8px);           /* soft blur */
}

button {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
}
