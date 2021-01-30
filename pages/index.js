 import "tailwindcss/tailwind.css";
 import Link from 'next/link';
 import fetch from 'isomorphic-unfetch';
 import "tailwindcss/tailwind.css";
 
 const Index () => {
   return ()
 }
 
 Index.getInitialProps = async () => {
   const res = await fetch('http:://localhost:3000/api/notes');
   const { data } = await res.json();

   return { notes: data }
 }