
import classes from './heroHeader.module.css';
import Spline from '@splinetool/react-spline';




export default function HeroHeader() {
    return (
        <div className={classes.hero}>
            <div className={classes.left}>
                <h1 className={classes.title}>Over 100 <br />  Unique Teas to <br /> Boost Health & Mood</h1>
                <button className={classes.button}>Shop Now</button>
            </div>
            <div className={classes.right}>
                <Spline scene="https://prod.spline.design/1kkhKHIF9Eon8Art/scene.splinecode" />
            </div>
        </div>
    );
}
