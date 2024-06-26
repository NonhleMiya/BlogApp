import BlogList from './BlogList';
import useFetch from './UseFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blog');

    return(
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    )
}
export default Home;