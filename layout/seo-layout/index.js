import Head from 'next/head';

const SeoLayout = ({
  title,
  children,
  metaDescription,
  image
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link id='favicon' rel='icon' type='image/ico' href={image} />
        <meta name='description' content={metaDescription} />
        <meta name='viewport' content='width=device-width, user-scalable=no' />
      </Head>
      {children}
    </>
  );
};

export default SeoLayout;
