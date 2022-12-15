import "./QRCode.css";

function QRCode() {
  return (
    <>
      <div className="qr-code">
        <img src="image-qr-code.png" alt="QR code" />
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>

      <div class="attribution">
        Challenge by {" "}
        <a
          href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/deko95">Kostiantyn Shyrolapov</a>
        .
      </div>
    </>
  );
}

export default QRCode;
