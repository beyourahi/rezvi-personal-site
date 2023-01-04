import { brandName, website_desc, prod_URL } from "data.json";

const Head = () => (
    <>
        <title>{brandName}</title>

        <link rel="icon" href="/favicon.ico" />

        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={website_desc} />
        <meta name="robots" content="index, follow" />
        <meta
            name="keywords"
            content="content writer, content, writer, raihana rezvi, raihana, rezvi, portfolio, website, personal website, portfolio website"
        />
        <meta property="og:url" content={prod_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={brandName} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content={website_desc} />
        <meta property="og:image" content="/preview.png" />
    </>
);

export default Head;
