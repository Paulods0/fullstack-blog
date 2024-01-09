import FadeLoader from "react-spinners/BounceLoader"

const Loader = ({ size, absolute = false }) => {
  return (
    <div>
      {absolute ? (
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FadeLoader color=" #DC143C" size={size} />
          <p style={{ marginTop: 10 }}>Image is loading...</p>
        </div>
      ) : (
        <div>
          <BounceLoader color=" #DC143C" size={size} />
        </div>
      )}
    </div>
  )
}

export default Loader
