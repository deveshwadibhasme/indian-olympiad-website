
const getImageLink = (path) => {
    return (
        location.hostname === "localhost" ? `https://indianolympiadschool.com${path}` :
            location.hostname === "indian-olympiad-website.vercel.app" ?
                `https://ios.anicomic.in${path}`
                : location.origin + path
    );
}

export default getImageLink