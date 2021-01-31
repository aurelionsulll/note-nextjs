 import "tailwindcss/tailwind.css";
 import Link from 'next/link';
 import fetch from 'isomorphic-unfetch';
 import "tailwindcss/tailwind.css";
 
 const Index = ({notes}) => {
   return (
     <div className='bg-gray-200 py-4 px-3'>
       <h1 className='text-2xl mb-4 text-center text-blue-500'>Notes</h1>
       <div className='max-w-md mx-auto bg-white rounded-xl shadow-md p-4'>
          {notes.map(note => {
            return (
              <div Key={note._id}>
                <div>
                  <div className='container mx-auto'>
                    <Link href={'/${note._id}'}>
                      <a> { note.title } </a>
                    </Link>
                    <Link href={'/${note._id}'}>
                      <a className='bg-blue-500 text-white py-1 px-2 rounded-xl float-right mr-1'> View </a>
                    </Link>
                    <Link href={'/${note._id}/edit'}>
                      <a className='bg-green-500 text-white py-1 px-2 rounded-xl float-right mr-1'> Edit </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
       </div>
     </div>
   )
 }
 
 Index.getInitialProps = async () => {
   const res = await fetch('http://localhost:3000/api/notes');
   const { data } = await res.json();

   return { notes: data }
 }

 export default Index;