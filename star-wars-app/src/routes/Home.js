
// Need to add in a wookie mode for the user that translates all the results into wookie, can use a state and then pass wether it is activated or not
// Make it so if they click on the species or vehicle they get taken to the detail page?
function Home() {    
  return (
    <div className='home'>
        <h1>The Star Wars Wiki</h1>
        <article className="home-article">
        Welcome to the Star Wars Wiki, a comprehensive encyclopedia of the legendary universe created by George Lucas. Here, you will find information on all aspects of the Star Wars universe, including
         characters, planets, species, vehicles, and much more. With its rich history spanning across numerous films, TV shows, novels, comics, and video games, Star Wars has captured the imagination
          of fans worldwide and has become a cultural phenomenon. Whether you're a lifelong fan or just discovering this galaxy far, far away for the first time, this Wiki is the ultimate guide to all things Star Wars.
        </article>
    </div>
  );
}

export { Home };
