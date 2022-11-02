export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/hello');
    const data = await res.json();
    console.log(data)
    return{
        props: { user: data} 
    }
}

function About({user}){
    console.log(user)
    return(
    <>  
        <p>dsd</p>
        {user.map((use) => (
            <div key={use.id}>
            <a>
                <li>{use.name}</li>
            </a>  
            </div>  
        ))}
    </>)
}

export default About;