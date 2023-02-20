
import { useState } from "react";
import { items } from "../public/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/slideshow.module.css";
export default function Slideshow() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    
  <div style={{display:'flex',flexDirection:"row",justifyContent:'center',width:'400px',margin:'auto'}}>


    <Carousel  activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={`${item.imageUrl}`} alt="slides" style={{marginTop:'40px',width:'400px',height:'600px'}}/>
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}