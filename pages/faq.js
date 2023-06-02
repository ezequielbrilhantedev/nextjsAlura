import { useEffect, useState } from 'react';
import Link from '../src/components/Link';

// export async function getServerSideProps() {
//   console.log('Rodando a cada acesso que você recebe')
// }

export async function getStaticProps() {
  // console.log('Roda somente em build time')
  const FAQ_API_URL =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(FAQ_API_URL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
  return {
    props: {
      faq
    }
  };
}

export default function FAQPage({ faq }) {
  return (
    <div>
      <h1>Tire suas dúvidas</h1>
      <Link href="/">Ir para a Home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
