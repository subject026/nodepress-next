import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import uuid from "react-uuid";
import Link from "next/link";

export const getStaticProps = async () => {
  // const data = await fetchData("https://www.healthcare.gov/api/articles.json");
  // console.log(data);
  return {
    props: {
      articles: [
        { title: "wooooooooooo" },
        { title: "ha ha ha" },
        { title: " doody woola" }
      ]
    }
  };
};

const Home = ({ articles }) => {
  return (
    <article>
      <h1>HealthCare.gov Articles</h1>
      <Link href="/other-page">other page</Link>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Article</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.length > 0 &&
            articles.map((el, i) => {
              const key = `item__${i}`;
              return (
                <tr key={key}>
                  <td>{el.title}</td>
                  <td>{el.title}</td>
                  <td>hmmmm</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </article>
  );
};

export default Home;
