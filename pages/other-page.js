import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import uuid from "react-uuid";

// const fetchData = async url => {
//   const query = await fetch(url);
//   return await query.json();
// };

// export const getStaticProps = async () => {
//   // const data = await fetchData("https://www.healthcare.gov/api/articles.json");
//   // return {
//   //   props: {
//   //     articles: data.articles
//   //   }
//   // };
// };

const OtherPage = () => (
  <article>
    <h1>Hmmmmmm</h1>
    <p>Whoops</p>
  </article>
);

export default OtherPage;
