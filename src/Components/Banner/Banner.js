import "./Banner.css"
function Banner() {
    return (
        <div
            className="w-full "
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="NameStrip ">
                Avengers Endgame
            </div>
        </div>
    );
}

export default Banner;
