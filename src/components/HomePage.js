import { Button, Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import db from "../firebase";
import "../style/App.scss";
import MediumPosts from "../components/MediumPosts";

import bitcoin from '../images/bitcoin-wallet.png';


function  HomePage() {
  

const [value, setValues] = useState({ title: "", paragraph: "", url: "" });
const [posts, setPosts] = useState([]);



 useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

return (
    <div className="App">
<div className="App_MainSection">
<Container>
  <Grid container justify="center" alignItems="center">
 
 
    <Grid item lg={4}>
      <h1>Be The First <strong>To get Crypto news</strong> </h1>

      <p>
        Read and share news and topics about  <strong>Cryptocurrency</strong>
     
      </p>

      <Button>Get Started</Button>
  
  
    </Grid>
    <Grid item container justify="center" lg={2}>
      <img
        src={bitcoin}
        alt="medium"
      />
    </Grid>
  </Grid>
</Container>
</div>


<div className="App_posts">
  
<Container>
  {posts.map(({ id, data }) => (
    <MediumPosts key={id} id={id} data={data} />
  ))}
</Container>

</div>


</div>

)
}
  

  export default HomePage ;


  /*<a href="!#">Learn more.</a> */