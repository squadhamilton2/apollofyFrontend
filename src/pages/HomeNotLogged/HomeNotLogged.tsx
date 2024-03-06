export const HomeNotLogged = () => {

  return (
    <div className="homeNotLogged_container">
      <img className="homeNotLogged_musicAnswerImg" src="../src/assets/images/HomeNotLogged/musicAnswer.webp" alt="music is the answer" />
      <img className="homeNotLogged_musicAnswerLogo" src="../src/assets/images/HomeNotLogged/logo.webp" alt="" />
      <p className="homeNotLogged_text">Sing. Dance. Feel Free. Only on Apollofy.</p>
      <button className="homeNotLogged_btn homeNotLogged_btnBlue">Sing Up Free</button>
      <button className="homeNotLogged_btn">
        <img className="homeNotLogged_googleLogo" src="../src/assets/images/HomeNotLogged/googleLogo.webp" alt="" />
        Continue with Google
      </button>
      <button className="homeNotLogged_btn">Log in</button>
    </div>
  )
}

