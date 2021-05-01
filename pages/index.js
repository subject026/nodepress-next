import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import uuid from "react-uuid";

const fetchData = async url => {
  const query = await fetch(url);
  return await query.json();
};

export const getStaticProps = async () => {
  const data = await fetchData("https://www.healthcare.gov/api/articles.json");

  return {
    props: {
      articles: data.articles
    }
  };
};

const Home = ({ articles }) => (
  <article>
    <h1>HealthCare.gov Articles</h1>
    <a href="/other-page">other page</a>
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
          articles.map(el => (
            <tr key={uuid()}>
              <td>{el.lang}</td>
              <td>
                <a href={"https://www.healthcare.gov" + el.url} target="_blank">
                  {el.title}
                </a>
              </td>
              <td>{el.date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </article>
);

export default Home;
