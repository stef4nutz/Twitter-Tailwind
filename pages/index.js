import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Tweet from '../components/Tweet';
import WriteTweet from '../components/WriteTweet';

export default function Home() {
    return (
        <>
        {/**/}        
        <Head>
            <title>Twitter</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <Navbar />

        <div className='py-10 px-5 tweet'>
            <WriteTweet />
            <Tweet />
        </div>
        {/**/}  
        </>
    )
};