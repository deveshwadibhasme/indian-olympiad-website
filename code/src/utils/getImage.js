
export const getImageLink = (image) => {
    return (
        location.hostname === "localhost" ? `https://ios.anicomic.in${image}` :
            location.hostname === "indian-olympiad-website.vercel.app" ?
                `https://ios.anicomic.in${image}`
                : location.hostname + image
    );
}