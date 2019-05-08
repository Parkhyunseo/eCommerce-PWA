import Head from "next/head";
import PostLink from "../components/Postlink";

export default class extends React.Component{
    
    render() {
        return (
            <div>
                <Head>
                    <title>Home | Nomad Store</title>
                </Head>
                <h1>Movie:</h1>
                <ul>
                    <li>
                        <PostLink title={"Something"} id={0}/>
                    </li>
                    <li>
                        <PostLink title={"Something else"} id={1}/>
                    </li>
                </ul>
            </div>
        );
    }
}
