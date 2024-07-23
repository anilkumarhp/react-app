function Profile() {
    return (
        <img 
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Anil kumar"
        />
    );
}


export default function Gallery() {
    return (
        <section>
            <h1>Amazing Developer</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}