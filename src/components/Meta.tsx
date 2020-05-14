import Head from "next/head";

export default (props:any) => {
  return (
    <Head>
      <title>{props.title || "乐猪租房"}</title>
      {(props.meta || []).map((v: any, index: number) => (
        <meta {...v} key={index}></meta>
      ))}
    </Head>
  );
};
